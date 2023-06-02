package parser

import (
	"bufio"
	"encoding/json"
	"strings"
	"sync"
	"time"

	"github.com/dlefevre/brew-exporter/config"
	"github.com/dlefevre/brew-exporter/metrics"
	log "github.com/sirupsen/logrus"
	"github.com/tarm/serial"
)

type PidParserService struct {
	serialConf *serial.Config
	port       *serial.Port
	reader     *bufio.Reader
	store      metrics.MetricStore
}

var pidInstance *PidParserService = nil
var pidLock = &sync.Mutex{}

// Returns the singleton instance
func GetPidParserService() *PidParserService {
	pidLock.Lock()
	defer pidLock.Unlock()

	if pidInstance == nil {
		pidInstance = newPidParserService()
	}
	return pidInstance
}

// Construct a new parser
func newPidParserService() *PidParserService {
	config := config.GetConfigService()

	serialConf := &serial.Config{
		Name:     config.PidDevice,
		Baud:     config.SerialBaud,
		Size:     config.SerialSize,
		StopBits: config.SerialStopBits,
	}

	return &PidParserService{
		serialConf: serialConf,
		port:       nil,
		reader:     nil,
		store:      nil,
	}
}

// Open serial port
func (service *PidParserService) openPort() {
	port, err := serial.OpenPort(service.serialConf)
	if err != nil {
		log.Errorf("PidParserService: Could not open port: %s", err)
		time.Sleep(config.GetConfigService().BackOffInterval)
	}
	service.port = port
	service.reader = bufio.NewReader(service.port)
}

// Reopen port
func (service *PidParserService) reopenPort() {
	service.port.Close()
	service.openPort()
}

// Active thread
func (service *PidParserService) Run() {
	config := config.GetConfigService()

	service.openPort()
	defer service.port.Close()

	service.validate()

	log.Infof("PidParserService: Parsing serial data on %s", config.PidDevice)

	for {
		str, err := service.reader.ReadString('#')
		if err != nil {
			log.Errorf("PidParserService: Read error (%s), reopening port", err)
			service.reopenPort()
		}

		str = strings.TrimSuffix(str, "\n")
		str = strings.TrimSuffix(str, "\r")
		str = strings.TrimSuffix(str, "#")

		var record map[string]interface{}
		err = json.Unmarshal([]byte(str), &record)
		if err != nil {
			log.Warnf("PidParserService: Could not parse JSON: '%s'", str)
			continue
		}

		parts := record["g"].([]interface{})
		if len(parts) != 2 {
			log.Warnf("PidParserService: Could not parse JSON: '%s'", str)
			continue
		}

		data := parts[0].(map[string]interface{})
		tuple := data["d"].([]interface{})
		pidSetTemp := tuple[0].(float64)
		pidCurrentTemp := tuple[1].(float64)

		data = parts[1].(map[string]interface{})
		tuple = data["d"].([]interface{})
		pidCurrentPower := tuple[0].(float64)
		pidMaxPower := tuple[1].(float64)

		service.store.SetMetric(metrics.Metric{
			Id:    metrics.PIDSetTemp,
			Value: pidSetTemp,
		})
		service.store.SetMetric(metrics.Metric{
			Id:    metrics.PIDCurrentTemp,
			Value: pidCurrentTemp,
		})
		service.store.SetMetric(metrics.Metric{
			Id:    metrics.PIDCurrentPower,
			Value: pidCurrentPower,
		})
		service.store.SetMetric(metrics.Metric{
			Id:    metrics.PIDMaxPower,
			Value: pidMaxPower,
		})
	}
}

// Check consistency of service setup
func (service *PidParserService) validate() {
	if service.store == nil {
		log.Fatal("PidParserService: No MetricStore configured in PidParserService")
	}
}

// Set the metricstore
func (service *PidParserService) SetMetricStore(store metrics.MetricStore) {
	service.store = store
}

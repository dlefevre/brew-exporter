package parser

import (
	"bufio"
	"fmt"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/dlefevre/brew-exporter/config"
	"github.com/dlefevre/brew-exporter/metrics"
	log "github.com/sirupsen/logrus"
	"github.com/tarm/serial"
)

type SerialProbeParserService struct {
	serialConf *serial.Config
	port       *serial.Port
	reader     *bufio.Reader
	store      metrics.MetricStore
}

var instance *SerialProbeParserService = nil
var lock = &sync.Mutex{}

// Returns the singleton instance
func GetSerialProbeParserService() *SerialProbeParserService {
	lock.Lock()
	defer lock.Unlock()

	if instance == nil {
		instance = newSerialProbeParserService()
	}
	return instance
}

// Construct a new parser
func newSerialProbeParserService() *SerialProbeParserService {
	config := config.GetConfigService()

	serialConf := &serial.Config{
		Name:     config.SerialDevice,
		Baud:     config.SerialBaud,
		Size:     config.SerialSize,
		StopBits: config.SerialStopBits,
	}

	return &SerialProbeParserService{
		serialConf: serialConf,
		port:       nil,
		reader:     nil,
		store:      nil,
	}
}

// Open serial port
func (service *SerialProbeParserService) openPort() {
	port, err := serial.OpenPort(service.serialConf)
	if err != nil {
		log.Errorf("SerialProbeParserService: Could not open port: %s", err)
		time.Sleep(config.GetConfigService().BackOffInterval)
	}
	service.port = port
	service.reader = bufio.NewReader(service.port)
}

// Reopen port
func (service *SerialProbeParserService) reopenPort() {
	service.port.Close()
	service.openPort()
}

// Active thread
func (service *SerialProbeParserService) Run() {
	config := config.GetConfigService()

	service.openPort()
	defer service.port.Close()

	service.validate()

	log.Infof("SerialProbeParserService: Parsing serial data on %s", config.SerialDevice)

	for {
		str, err := service.reader.ReadString('\n')
		if err != nil {
			log.Errorf("SerialProbeParserService: Read error (%s), reopening port", err)
			service.reopenPort()
		}

		str = strings.TrimSuffix(str, "\n")
		str = strings.TrimSuffix(str, "\r")
		parts := strings.Split(str, ";")
		if len(parts) != 4 {
			log.Warnf("SerialProbeParserService: Invalid number of values in line: %s", str)
			continue
		}

		for i, part := range parts {
			value, err := strconv.ParseFloat(part, 64)
			if err != nil {
				log.Warnf("SerialProbeParserService: Could not parse value: '%s'", part)
				continue
			}
			service.store.SetMetric(metrics.Metric{
				Id:    fmt.Sprintf("serialprobe_temp_%d", i+1),
				Value: value,
			})
		}
	}
}

// Check consistency of service setup
func (service *SerialProbeParserService) validate() {
	if service.store == nil {
		log.Fatal("SerialProbeParserService: No MetricStore configured in SerialProbeParserService")
	}
}

// Set the metricstore
func (service *SerialProbeParserService) SetMetricStore(store metrics.MetricStore) {
	service.store = store
}

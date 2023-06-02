package config

import (
	"flag"
	"fmt"
	"sync"
	"time"

	log "github.com/sirupsen/logrus"
	"github.com/tarm/serial"
)

type ConfigService struct {
	ListenAddress   string
	ProbeDevice     string
	PidDevice       string
	SerialBaud      int
	SerialSize      byte
	SerialStopBits  serial.StopBits
	BackOffInterval time.Duration
	LogLevel        log.Level
}

var instance *ConfigService = nil
var lock = &sync.Mutex{}

// Returns the singleton instance
func GetConfigService() *ConfigService {
	lock.Lock()
	defer lock.Unlock()

	if instance == nil {
		instance = newConfigService()
	}
	return instance
}

// Construct a new parser
func newConfigService() *ConfigService {
	listenAddress := flag.String("listen", defaultListenAddress, "Listen address and port")
	probeDevice := flag.String("probedevice", defaultSerialProbeDevice, "Serial device for Serial Probe")
	pidDevice := flag.String("piddevice", defaultPidDevice, "Serial device for PID")
	serialBaud := flag.Int("baud", defaultSerialBaud, "Baud rate")
	sLogLevel := flag.String("loglevel", defaultLogLevel, "Log Level")
	flag.Parse()

	logLevel, err := log.ParseLevel(*sLogLevel)
	if err != nil {
		log.Error(fmt.Sprintf("ConfigService: %v, setting default (%s)", err, defaultLogLevel))
		logLevel, err = log.ParseLevel(defaultLogLevel)
		if err != nil {
			log.Fatal(fmt.Sprintf("ConfigService: Issue setting default Log level: %v", err))
		}
	}

	service := &ConfigService{
		ListenAddress:   *listenAddress,
		ProbeDevice:     *probeDevice,
		PidDevice:       *pidDevice,
		SerialBaud:      *serialBaud,
		SerialSize:      defaultSerialSize,
		SerialStopBits:  defaultSerialStopBits,
		BackOffInterval: defaultBackOffInterval * time.Second,
		LogLevel:        logLevel,
	}
	service.info()

	return service
}

// Some informational logging
func (service *ConfigService) info() {
	log.Infof("ConfigService: configured value for ListenAddress: `%s`", service.ListenAddress)
	log.Infof("ConfigService: configured value for ProbeDevice: `%s`", service.ProbeDevice)
	log.Infof("ConfigService: configured value for PidDevice: `%s`", service.PidDevice)
	log.Infof("ConfigService: configured value for SerialBaud: `%d`", service.SerialBaud)
	log.Infof("ConfigService: configured value for SerialSize: `%d`", service.SerialSize)
	log.Infof("ConfigService: configured value for SerialStopBits: `%d`", service.SerialStopBits)
	log.Infof("ConfigService: configured value for BackOffInterval: `%s`", service.BackOffInterval.String())
	log.Infof("ConfigService: configured value for LogLevel: `%s`", service.LogLevel.String())
}

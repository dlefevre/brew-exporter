package main

import (
	"sync"

	"github.com/dlefevre/brew-exporter/collector"
	"github.com/dlefevre/brew-exporter/config"
	"github.com/dlefevre/brew-exporter/metrics"
	"github.com/dlefevre/brew-exporter/parser"
	log "github.com/sirupsen/logrus"
)

func main() {
	config := config.GetConfigService()

	log.SetFormatter(&log.TextFormatter{})
	log.SetLevel(config.LogLevel)

	serialParser := parser.GetSerialProbeParserService()
	pidParser := parser.GetPidParserService()
	collector := collector.GetBrewCollector()

	store := metrics.NewMetricStore()
	serialParser.SetMetricStore(store)
	pidParser.SetMetricStore(store)
	collector.SetMetricStore(store)

	var wg sync.WaitGroup
	wg.Add(2)

	go serialParser.Run()
	go pidParser.Run()
	go collector.Run()

	wg.Wait()
}

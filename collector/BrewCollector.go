package collector

import (
	"net/http"
	"sync"
	"time"

	"github.com/dlefevre/brew-exporter/config"
	"github.com/dlefevre/brew-exporter/metrics"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	log "github.com/sirupsen/logrus"
)

type BrewCollector struct {
	descriptors map[string]*prometheus.Desc
	types       map[string]prometheus.ValueType
	store       metrics.MetricStore
}

var instance *BrewCollector = nil
var lock = &sync.Mutex{}

// Returns the singleton instance
func GetBrewCollector() *BrewCollector {
	lock.Lock()
	defer lock.Unlock()

	if instance == nil {
		instance = newBrewCollector()
	}
	return instance
}

// Constructor
func newBrewCollector() *BrewCollector {
	return &BrewCollector{
		descriptors: createPrometheusDescriptors(),
		types:       createPrometheusTypes(),
		store:       nil,
	}
}

// Send describers to prometheus channel
func (collector *BrewCollector) Describe(ch chan<- *prometheus.Desc) {
	log.Debug("BrewCollector: Describing metrics.")

	for _, descriptor := range collector.descriptors {
		ch <- descriptor
	}
}

// Collect metrics and send to prometheus channel
func (collector *BrewCollector) Collect(ch chan<- prometheus.Metric) {
	log.Debug("BrewCollector: Collecting metrics.")

	ts := time.Now()

	for id, descriptor := range collector.descriptors {
		metric, err := collector.store.GetMetric(id)
		if err == nil {
			m, err := prometheus.NewConstMetric(
				descriptor,
				collector.types[id],
				metric.Value,
			)
			log.Debug("Metric struct: ", metric)
			if err != nil {
				log.Errorf("BrewCollector: Could not create ConstMetric for %s (%v)", id, err)
				continue
			}
			m = prometheus.NewMetricWithTimestamp(ts, m)
			ch <- m
		} else {
			log.Errorf("BrewCollector: Could not find metric %s (%v)", id, err)
		}
	}
}

// Listen for incomming connections
func (collector *BrewCollector) Run() {
	config := config.GetConfigService()
	collector.validate()

	registry := prometheus.NewRegistry()
	registry.MustRegister(collector)
	handler := promhttp.HandlerFor(registry, promhttp.HandlerOpts{})

	log.Infof("BrewCollector: Listening on %s", config.ListenAddress)

	http.Handle("/metrics", handler)
	err := http.ListenAndServe(config.ListenAddress, nil)
	log.Fatalf("BrewCollector: Listener borked: %v", err)
}

// Check consistency of service setup
func (collector *BrewCollector) validate() {
	if collector.store == nil {
		log.Fatal("BrewCollector: No MetricStore configured in BrewCollector")
	}
}

// Set the metricstore
func (collector *BrewCollector) SetMetricStore(store metrics.MetricStore) {
	collector.store = store
}

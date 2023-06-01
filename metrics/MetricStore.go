package metrics

import (
	"fmt"
	"sync"

	log "github.com/sirupsen/logrus"
)

type MetricStore interface {
	SetMetric(Metric)
	GetMetric(string) (Metric, error)
}

type MetricStoreImpl struct {
	store map[string]Metric
	lock  *sync.RWMutex
}

// Construct a new MetricsStore
func NewMetricStore() MetricStore {
	return &MetricStoreImpl{
		store: map[string]Metric{
			SerialProbeTemp1: {
				Id:    SerialProbeTemp1,
				Value: 0.0,
			},
			SerialProbeTemp2: {
				Id:    SerialProbeTemp2,
				Value: 0.0,
			},
			SerialProbeTemp3: {
				Id:    SerialProbeTemp3,
				Value: 0.0,
			},
			SerialProbeTemp4: {
				Id:    SerialProbeTemp4,
				Value: 0.0,
			},
			PIDSetTemp: {
				Id:    PIDSetTemp,
				Value: 0.0,
			},
			PIDCurrentTemp: {
				Id:    PIDCurrentTemp,
				Value: 0.0,
			},
			PIDCurrentPower: {
				Id:    PIDCurrentPower,
				Value: 0.0,
			},
			PIDMaxPower: {
				Id:    PIDMaxPower,
				Value: 0.0,
			},
		},
		lock: &sync.RWMutex{},
	}
}

// Set a single metric
func (store *MetricStoreImpl) SetMetric(metric Metric) {
	store.lock.Lock()
	defer store.lock.Unlock()
	store.store[metric.Id] = metric
	log.Tracef("MetricStore: metric set: %+v", metric)
}

// Get a single metric (not guaranteed to yield a consistent set over multiple calls)
func (store *MetricStoreImpl) GetMetric(id string) (Metric, error) {
	store.lock.RLock()
	defer store.lock.RUnlock()

	if metric, found := store.store[id]; found {
		return metric, nil
	} else {
		return Metric{}, fmt.Errorf("no metric with id `%s` found", id)
	}
}

package collector

import (
	"github.com/dlefevre/brew-exporter/metrics"
	"github.com/prometheus/client_golang/prometheus"
)

// Helper functions to construct the promethus collector for the P1 interface
// This keeps the clutter out of BrewCollector.go

// Get a map of metric descriptors
func createPrometheusDescriptors() map[string]*prometheus.Desc {
	return map[string]*prometheus.Desc{
		metrics.SerialProbeTemp1: prometheus.NewDesc(
			"serialprobe_temp_1",
			"Temperature of probe 1 in degrees Celsius",
			nil, nil),
		metrics.SerialProbeTemp2: prometheus.NewDesc(
			"serialprobe_temp_2",
			"Temperature of probe 2 in degrees Celsius",
			nil, nil),
		metrics.SerialProbeTemp3: prometheus.NewDesc(
			"serialprobe_temp_3",
			"Temperature of probe 3 in degrees Celsius",
			nil, nil),
		metrics.SerialProbeTemp4: prometheus.NewDesc(
			"serialprobe_temp_4",
			"Temperature of probe 4 in degrees Celsius",
			nil, nil),
		metrics.PIDSetTemp: prometheus.NewDesc(
			"pid_set_temp",
			"Set temperature of the PID controller in degrees Celsius",
			nil, nil),
		metrics.PIDCurrentTemp: prometheus.NewDesc(
			"pid_measured_temp",
			"Measured temperature of the PID controller in degrees Celsius",
			nil, nil),
		metrics.PIDCurrentPower: prometheus.NewDesc(
			"pid_current_power_pct",
			"Current power output of the PID controller in percent",
			nil, nil),
		metrics.PIDMaxPower: prometheus.NewDesc(
			"pid_max_power_pct",
			"Maximum power output of the PID controller in percent",
			nil, nil),
	}
}

// Get a map of matched types
func createPrometheusTypes() map[string]prometheus.ValueType {
	return map[string]prometheus.ValueType{
		metrics.SerialProbeTemp1: prometheus.GaugeValue,
		metrics.SerialProbeTemp2: prometheus.GaugeValue,
		metrics.SerialProbeTemp3: prometheus.GaugeValue,
		metrics.SerialProbeTemp4: prometheus.GaugeValue,
		metrics.PIDSetTemp:       prometheus.GaugeValue,
		metrics.PIDCurrentTemp:   prometheus.GaugeValue,
		metrics.PIDCurrentPower:  prometheus.GaugeValue,
		metrics.PIDMaxPower:      prometheus.GaugeValue,
	}
}

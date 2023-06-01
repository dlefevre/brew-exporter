package metrics

const (
	SerialProbeTemp1 = "serialprobe_temp_1"
	SerialProbeTemp2 = "serialprobe_temp_2"
	SerialProbeTemp3 = "serialprobe_temp_3"
	SerialProbeTemp4 = "serialprobe_temp_4"

	PIDSetTemp      = "pid_set_temp"
	PIDCurrentTemp  = "pid_measured_temp"
	PIDCurrentPower = "pid_current_power_pct"
	PIDMaxPower     = "pid_max_power_pct"
)

type Metric struct {
	Id    string
	Value float64
}

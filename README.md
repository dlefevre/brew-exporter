# Brew Exporter

Hackish prometheus exporter for my home made serial temp probes and PID controller.

# Exporter

```
go run main.go --probedevice=/dev/cu.usbmodem112201 --piddevice=/dev/cu.usbmodem112301 
```

# Grafana & Prometheus
```
cd prometheus; make run
cd grafana; make run
```
Create the promemtheus datasource for http://localhost:9090.
Import the dashboard.
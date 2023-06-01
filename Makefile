.PHONY: all
all: clean build

.PHONY: clean
clean:
	rm -f brew-exporter

.PHONY: build
build: brew-exporter

p1-exporter:
	go build -o brew-exporter main.go

.PHONY: install
install: brew-exporter
	cp brew-exporter /usr/local/bin/

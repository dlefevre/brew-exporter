.PHONY: all
all: run

.PHONY: install
install: 
	brew install prometheus

.PHONY: upgrade
upgrade: 
	brew upgrade prometheus

.PHONY: uninstall
uninstall:
	brew uninstall prometheus

.PHONY: run
run: 
	/opt/homebrew/opt/prometheus/bin/prometheus --config.file=./prometheus.yml --web.listen-address="127.0.0.1:9090"


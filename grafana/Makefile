.PHONY: all
all: run

.PHONY: install
install: 
	brew install grafana

.PHONY: upgrade
upgrade: 
	brew upgrade grafana

.PHONY: uninstall
uninstall:
	brew uninstall grafana

.PHONY: run
run: 
	/opt/homebrew/opt/grafana/bin/grafana server \
	  --config ./grafana.ini \
	  --homepath ./ \
	  cfg:default.paths.logs=./log/grafana \
	  cfg:default.paths.data=./ \
	  cfg:default.paths.plugins=./plugins

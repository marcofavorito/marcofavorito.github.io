BIN=bundle exec jekyll

all: serve

clean: 
	rm -rf _site/ .jekyll-cache

build:
	$(BIN) build

serve:
	$(BIN) serve 

.PHONY: clean

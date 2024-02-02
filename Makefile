BIN=bundle exec jekyll

all: serve

clean: 
	rm -rf _site/ .jekyll-cache
	rm -rf *.aux *.bbl *.bcf *.blg *.fdb_latexmk *.fls *.log *.out *.toc

build:
	$(BIN) build

serve:
	$(BIN) serve 

.PHONY: clean

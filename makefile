package=client

serve:
	npm run --prefix packages/${package} serve

build:
	npm run --prefix packages/${package} build

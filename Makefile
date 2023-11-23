.PHONY: build push

all:

build:
	pnpm run build

push: build
	(cd micro && space push)
.PHONY: build push

all:

build:
	pnpm run build
	cd micro && pnpm i

push: build
	(cd micro && space push)

run: build
	(\
		set -a && . ./.env && ORIGIN=http://localhost:3000 \
		&& cd micro && node ./server.js \
	)

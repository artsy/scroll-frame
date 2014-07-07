BIN = node_modules/.bin

test:
	$(BIN)/mocha test/test.js

example:
	node example/server.js

.PHONY: test example
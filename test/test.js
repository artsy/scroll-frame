var benv = require('benv');
var scrollFrame;

beforeEach(function(done) {
  benv.setup(function() {
    benv.expose({ $: require('jquery'), jQuery: require('jquery') });
    scrollFrame = require('../index');
    done();
  });
});

afterEach(function() {
  benv.teardown();
});

describe('scrollFrame', function() {

  it('adds an iframe to the body when clicking a scoped link', function() {
  });
});
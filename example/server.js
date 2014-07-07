var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));
app.listen(4000, function() {
  console.log('Listening on 4000');
});
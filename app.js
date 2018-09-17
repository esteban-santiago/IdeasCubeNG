var express = require('express');
var searchController = require('./api/controllers/searchController');

var app = express();

var port = process.env.PORT || 3000;


//static files
app.use('/', express.static('./public'));

//fire controllers
searchController(app);

app.listen(port);

console.log('Ideas Cube NG RESTful API server started on: ' + port);

//for testing
module.exports = app;

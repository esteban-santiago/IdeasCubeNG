var express = require('express');
var constants = require('./api/models/constants');
var searchController = require('./api/controllers/searchController');

var app = express();
var port = process.env.PORT || constants.port;


//static files
app.use('/', express.static(constants.public_folder));

//fire controllers
searchController(app);

app.listen(port);

console.log(constants.app_name + ' RESTful API server started on: ' + port);

//for testing
module.exports = app;

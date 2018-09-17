'use strict';

var searchService = require('../services/searchService');

const PATH = '/api/ideascubeng/v1.0';

module.exports = function(app) {

  app.get(PATH + '/search', function(req, res){

  });

  app.get(PATH + '/search/:keyword', function(req, res){
    searchService.search(req.params.keyword)
      .then((results) => res.send(results));
  });

  app.get(PATH + '/search/:field/:keyword', function(req, res){
    searchService.search(req.params.keyword)
      .then((results) => res.send(results));
  });

  app.get(PATH + '/search/:language/:field/:keyword', function(req, res){
    searchService.search(req.params.keyword)
      .then((results) => res.send(results));
  });

}

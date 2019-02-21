'use strict';

var xmljs = require('xml-js');
var searchService = require('../services/searchService');
var searchModel = require('../models/searchModel');


const PATH = '/api/ideascubeng/v1.0';

module.exports = function(app) {


  app.get(PATH + '/search/:keyword', function(req, res){
    searchService.search(req.params.keyword)
      .then((results) => res.send(results));
  });

  app.get(PATH + '/opensearch/:keyword', function(req, res){
    //console.log(req);
    searchService.search(req.params.keyword)
      .then(
        (results) => {
          console.log(xmljs.json2xml(searchModel.OpenSearchModel, {compact: false, ignoreComment: false, spaces: 4}));
          res.send();
          //console.log(xmljs.json2xml(results, {compact: true, ignoreComment: true, spaces: 4}));
          //res.send();
        //}
        //(results) => res.send(results)
        //res.send(xmljs.xml2json('<?xml version="1.0" encoding="UTF-8"?><OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"><ShortName>OLIP</ShortName><Description>OLIP Search Engine</Description><Url type="application/atom+xml" template="http://70.167.220.187:443/opensearch/search?q={searchTerms}"/></OpenSearchDescription>'))
        }
      );
  });

  //Not Implemented
  app.get(PATH + '/search/:field/:keyword', function(req, res){
    searchService.search(req.params.keyword)
      .then((results) => res.send(results));
  });

  //Not Implemented
  app.get(PATH + '/search', function(req, res){

  });

  //Not Implemented
  app.get(PATH + '/search/:language/:field/:keyword', function(req, res){
    searchService.search(req.params.keyword)
      .then((results) => res.send(results));
  });

}

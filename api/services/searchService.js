var SearchModel = require('../models/SearchModel');
var fs = require('fs'),
 lunr = require('lunr');

/**
private functions
*/

function getData() {
  return new Promise(
    function(resolve, reject) {
          fs.readFile('./public/search/PagesIndex.json', 'utf8',function(err, content){
              return err ? reject(err) : resolve(content);
          });
    }
  );
}

function parseJson(rawData) {
  return new Promise(function(resolve, reject) {
    return resolve(JSON.parse(rawData));
  });
}

function searchTerms(json, terms) {
    var results = [];
    var idx = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('tags');
        this.field('href');
        json.forEach(function (entry) {
          this.add(entry);
        },this);
      });
      idx.search(terms).forEach(function(occurrence) {
        results.push(json[occurrence.ref-1]);
      });

    return results;
}

exports.search = function(terms) {
  return getData()
    .then(rawData => parseJson(rawData))
    .then(json => searchTerms(json, terms))
    .catch(error => console.log(error));
}

'use strict';

var SearchModel = function (keywords, lang, occurrences) {
  this.keywords = keywords;
  this.lang = lang;
  this.occurrences = occurrences;
};

var OpenSearchModel = {
  "declaration" : {
    "attributes": {
      "version": "1.0",
      "encoding": "UTF-8"
    }
  },
  "elements" : [{
    "type": "element",
    "name": "OpenSearchDescription",
    "attributes": {
      "xmlns": "http://a9.com/-/spec/opensearch/1.1/"
    },
    "elements": [{
      "type": "element",
      "name": "ShortName",
      "elements": [{
        "type": "text",
        "text": "OLIP"
      }]
    }, {
      "type": "element",
      "name": "Description",
      "elements": [{
        "type": "text",
        "text": "OLIP Search Engine"
      }]
    }, {
      "type": "element",
      "name": "Url",
      "attributes": {
        "type": "application/atom+xml",
        "template": "http://70.167.220.187:443/opensearch/search?q={searchTerms}"
      }
    }]
  }]
};

exports.SearchModel = SearchModel;
exports.OpenSearchModel = OpenSearchModel;
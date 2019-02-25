'use strict';

var SearchModel = function (keywords, lang, occurrences) {
  this.keywords = keywords;
  this.lang = lang;
  this.occurrences = occurrences;
};

var injectEntries = function (entries) {
  var _entries = [];
  for (var i = 0; i <= 15; i++) {
    _entries.push({
      "type": "element",
      "name": "entry",
      "elements": [{
        "type": "element",
        "name": "title",
        "elements": [{
          "type": "text",
          "text": "Technology content set"
        }]
      }, {
        "type": "element",
        "name": "link",
        "attributes": {
          "href": "http://70.167.220.187:10000/pdfs/2385.pdf",
          "rel": "alternate"
        }
      }, {
        "type": "element",
        "name": "updated",
        "elements": [{
          "type": "text",
          "text": "2019-02-22T10:07:56Z"
        }]
      }, {
        "type": "element",
        "name": "id",
        "elements": [{
          "type": "text",
          "text": "tag:70.167.220.187:/pdfs/2385.pdf"
        }]
      }, {
        "type": "element",
        "name": "summary",
        "attributes": {
          "type": "html"
        },
        "elements": [{
          "type": "text",
          "text": "A nice flat icon set usable in all your documents"
        }]
      }]
    });
  }
  return _entries;
}

var OpenSearchModel = function () {
  var model = {
    "declaration": {
      "attributes": {
        "version": "1.0",
        "encoding": "utf-8"
      }
    },
    "elements": [{
      "type": "element",
      "name": "feed",
      "attributes": {
        "xmlns": "http://www.w3.org/2005/Atom"
      },
      "elements": [{
        "type": "element",
        "name": "title",
        "elements": [{
          "type": "text",
          "text": "Olip search results"
        }]
      }, {
        "type": "element",
        "name": "link",
        "attributes": {
          "href": "http://70.167.220.187:443/opensearch/search?q=test",
          "rel": "alternate"
        }
      }, {
        "type": "element",
        "name": "id",
        "elements": [{
          "type": "text",
          "text": "http://70.167.220.187:443/opensearch/search?q=test"
        }]
      }, {
        "type": "element",
        "name": "updated",
        "elements": [{
          "type": "text",
          "text": "2019-02-22T10:07:56Z"
        }]
      }, injectEntries()]
    }]
  }
  console.log(JSON.stringify(model));
  return model;
}

exports.SearchModel = SearchModel;
exports.OpenSearchModel = OpenSearchModel;

/*
var ____OpenSearchModel = {
  "declaration": {
    "attributes": {
      "version": "1.0",
      "encoding": "utf-8"
    }
  },
  "elements": [{
    "type": "element",
    "name": "feed",
    "attributes": {
      "xmlns": "http://www.w3.org/2005/Atom"
    },
    "elements": [{
      "type": "element",
      "name": "title",
      "elements": [{
        "type": "text",
        "text": "Olip search results"
      }]
    }, {
      "type": "element",
      "name": "link",
      "attributes": {
        "href": "http://70.167.220.187:443/opensearch/search?q=test",
        "rel": "alternate"
      }
    }, {
      "type": "element",
      "name": "id",
      "elements": [{
        "type": "text",
        "text": "http://70.167.220.187:443/opensearch/search?q=test"
      }]
    }, {
      "type": "element",
      "name": "updated",
      "elements": [{
        "type": "text",
        "text": "2019-02-22T10:07:56Z"
      }]
    }, {
      "type": "element",
      "name": "entry",
      "elements": [{
        "type": "element",
        "name": "title",
        "elements": [{
          "type": "text",
          "text": "Technology content set"
        }]
      }, {
        "type": "element",
        "name": "link",
        "attributes": {
          "href": "http://70.167.220.187:10000/pdfs/2385.pdf",
          "rel": "alternate"
        }
      }, {
        "type": "element",
        "name": "updated",
        "elements": [{
          "type": "text",
          "text": "2019-02-22T10:07:56Z"
        }]
      }, {
        "type": "element",
        "name": "id",
        "elements": [{
          "type": "text",
          "text": "tag:70.167.220.187:/pdfs/2385.pdf"
        }]
      }, {
        "type": "element",
        "name": "summary",
        "attributes": {
          "type": "html"
        },
        "elements": [{
          "type": "text",
          "text": "A nice flat icon set usable in all your documents"
        }]
      }]
    }]
  }]
};
 */
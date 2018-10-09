'use strict';

var SearchModel = function(keywords, lang, occurrences) {
  this.keywords = keywords;
  this.lang = lang;
  this.occurrences = occurrences;
};

exports.SearchModel = SearchModel;

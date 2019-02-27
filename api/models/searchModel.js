'use strict';

var SearchModel = function (keywords, lang, occurrences) {
  this.keywords = keywords;
  this.lang = lang;
  this.occurrences = occurrences;
};


var OpenSearchFeedModel = {
  'xmlns' : 'http://www.w3.org/2005/Atom',
  'title' : '',
  'link' : {  
    href : '',
    rel : 'alternate'
  },
  'id' : '',
  'updated' :'',
  'entries' : []
}

var OpenSearchEntryModel = {
  'entry' : '',
  'title' : '',
  'link' : {  
    href : '',
    rel : 'alternate'
  },
  'updated' :'',
  'id' : '',
  'summary' : {
    'summary' : '',
    'type' : ''
  }
}


exports.SearchModel = SearchModel;
exports.OpenSearchFeedModel = OpenSearchFeedModel;
exports.OpenSearchEntryModel = OpenSearchEntryModel;

//----Backup functions
var _OpenSearchFeedModel = function(id, title, link_href, link_rel, updated, entries) {
  this.title = title;
  this.link_href = link_href;
  this.link_rel = 'alternate';
  this.id = id;
  this.updated = updated;
  this.entries = entries;
}

var OpenSearchEntryModel = function(id, title, link, updated, summary, summary_type) {
  this.entry = entry;
  this.title = title;
  this.link = link;
  this.updated = updated;
  this.id = id;
  this.summary = summary;
  this.summary_type = summary_type;
}
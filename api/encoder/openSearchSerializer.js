'use strict';
var os = require('os');
var constants = require('../models/constants');
var searchModel = require('../models/searchModel');


var toOpenSearchFormat = function(keyword, entries) {
    var openSearchFeed = searchModel.OpenSearchFeedModel;
    var openSearchEntries = [];

    var ifaces = os.networkInterfaces();
    var en;
    try {
        en = ifaces[constants.if_ip].find( function (itf) {
            if( itf.family === constants.if_ip_family) {
                return itf;
            }
        });
    } catch (error) {
        en = { 'address' : 'localhost' };
    }
    openSearchFeed.id = 'http://'+en.address+':' + constants.port + '/opensearch/search?q='+keyword;
    openSearchFeed.title = constants.app_name + ' search results'; 
    openSearchFeed.link.href = 'http://' + en.address + ':' + constants.port + '/opensearch/search?q='+keyword;
    openSearchFeed.link.rel = 'alternate';
    openSearchFeed.updated = '2019-02-26T11:36:57Z';
    
    entries.forEach( function (entry) {
        var _entry = searchModel.OpenSearchEntryModel;
        _entry.title = entry.title;
        _entry.link.href = entry.href;
        _entry.link.rel='alternate';
        _entry.id = 'tag:' + entry.href;
        _entry.updated = '2019-02-26T11:36:57Z';
        _entry.summary.summary = entry.title;
        _entry.summary.type = 'file';
        openSearchEntries.push(_entry);
    });

    return toXMLOpenSearchFormat(openSearchFeed, openSearchEntries);
}

var toXMLOpenSearchFormat = function(openSearchFeed, openSearchEntries){
    let xml = 
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<feed xmlns="http://www.w3.org/2005/Atom">' +
            '<title>' + openSearchFeed.title + '</title>' +
            '<link href="' + openSearchFeed.link.href + '" rel="' + openSearchFeed.link.rel + '">' + '</link>' +
            '<id>' + openSearchFeed.id + '</id>' +
            '<updated>' + openSearchFeed.updated + '</updated>';

    var xml_entries = '';
    openSearchEntries.forEach( function(entry) {
        xml_entries +=  
        '<entry>' +
            '<title>'+entry.title+'</title>' +
            '<link href="'+entry.link.href+'" rel="'+entry.link.rel+'">' + '</link>' +
            '<updated>'+entry.updated+'</updated>' +
            '<id>'+entry.id+'</id>' +
            '<summary type="'+entry.summary.type+'">'+entry.summary.summary+'</summary>' +
        '</entry>';
    });
    return xml + xml_entries + '</feed>';
};

exports.toOpenSearchFormat = toOpenSearchFormat;
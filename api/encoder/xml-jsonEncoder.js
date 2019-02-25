'use strict';

var xmljs = require('xml-js');
var searchModel = require('../models/searchModel');

exports.jsonToOpenSearchFormat = function(json){
    
    return xmljs.json2xml(searchModel.OpenSearchModel(), {compact: false, ignoreComment: false, spaces: 4});
};

exports.xmlToJson = function(xml){
    return json;
};
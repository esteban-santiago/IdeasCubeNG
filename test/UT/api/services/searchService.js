/*jslint node: true */
'use strict';
//var assert = require('assert');
//var should = require('should');
var request = require('supertest');
var expect = require('chai').expect;
var app = require('../../../../app');
//var chai = require('chai');
var searchService = require('../../../../api/services/searchService');


describe('Search services - Unit Test', function () {

  before(function () {
  });

  describe('#search by keyword', function() {
    var keyword = 'noir';
    it('should return a list of occurrences with keyword ' + keyword, function (done) {
      request(app)
      .get('/api/ideascubeng/v1.0/search/' + keyword)
      .end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.length.above(0);
        //console.log(res.body[0].id);
        done();
      });
    });
  });

  afterEach(function () {
  });

});

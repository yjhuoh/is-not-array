'use strict';
var isNotArray = require('./');
require('chai').should();

describe('is not array', function () {
  it('should return true for constants and objects', function () {
    isNotArray(2).should.be.true;
    isNotArray('array').should.be.true;
    isNotArray({}).should.be.true;
  });

  it('should return false for arrays', function () {
    isNotArray([]).should.be.false;
  });
});

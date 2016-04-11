'use strict';

var char   = require('chai');
var expect = char.expect;


describe('random-zip: ', function () {

  var randomZip = require('../../index');

  it('shuffle()', function () {
    expect(randomZip()).to.match(/^[\d]{6}$/);
  });
});

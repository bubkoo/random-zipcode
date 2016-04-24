var expect = require('chai').expect;

describe('random-zip: ', function () {

  var randomZip = require('../../index');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomZip()).to.match(/^[\d]{5}$/);
      expect(randomZip(true)).to.match(/^[\d]{5}-\d{4}$/);
    }
  });
});

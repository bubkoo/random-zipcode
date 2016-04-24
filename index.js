'use strict';

var randomNatural = require('random-natural');

module.exports = function (plusFour) {

  var i = 5;

  var result = '';

  while (i--) {
    result += randomNatural(0, 9).toString();
  }

  if (plusFour) {

    result += '-';

    i = 4;
    while (i--) {
      result += randomNatural(0, 9).toString();
    }
  }

  return result;
};

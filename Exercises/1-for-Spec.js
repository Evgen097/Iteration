/* eslint-disable */
'use strict';

const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { sum } = require(`./${file}`);


describe( "1-for", function () {

  const cases = [
    [ [], 0],
    [ [1, 2, 3], 6],
    [ [-1, -2, -3], -6],
    [ [1000, 200, 30], 1230],
    ]
  ;

  it( "should calculate sum of all given arguments", function () {
    cases.forEach(item => {
      expect( sum(...item[0]) ).toEqual(item[1]);
    });
  });

});










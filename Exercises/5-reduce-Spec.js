/* eslint-disable */
'use strict';

const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { sum } = require(`./${file}`);


describe( "5-reduce", function () {

  const cases = [
    [ [], 0],
    [ [1, 2, 3], 6],
    [ [-1, -2, -3], -6],
    [ [1000, 200, 30], 1230],
    ]
  ;

  it( `Use Array.prototype.reduce method and" +
     calculate sum of all given arguments`, function () {
    cases.forEach(item => {
      expect( sum(...item[0]) ).toEqual(item[1]);
    });
  });

});










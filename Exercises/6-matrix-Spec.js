/* eslint-disable */
'use strict';

const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { max } = require(`./${file}`);


describe( "6-matrix", function () {

  const cases = [
    [ [[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9],
    [ [[1], [2, 3]], 3 ],
    [ [[-1, -2], [-3]], -1],
    [ [[1000], [200, 30]], 1000],
    ]
  ;

  it( `Use nested for loop to find max value in 2d matrix`, function () {
    cases.forEach(item => {
      expect( max(item[0]) ).toEqual(item[1]);
    });
  });

});










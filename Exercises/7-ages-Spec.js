/* eslint-disable */
'use strict';

const path = require('path');
const file = path.basename(__filename).replace('-Spec', '');
const { ages } = require(`./${file}`);


describe( "7-ages", function () {
  const cases = [
    [ {lenin: { born: 1870, died: 1924 }, mao: { born: 1893, died: 1976 },
      gandhi: { born: 1869, died: 1948 }, hirohito: { born: 1901, died: 1989 },
    }, { lenin: 54, mao: 83, gandhi: 79, hirohito: 88 } ],

    [ {Petro: { born: 2000, died: 2001 }, Ivan: { born: 1999, died: 2099 }},
      { Petro: 1, Ivan: 100 } ]
    ]
  ;

  it( `Use for..in to calculate age for each person`, function () {
    cases.forEach(item => {
      expect( ages(item[0]) ).toEqual(item[1]);
    });
  });

});










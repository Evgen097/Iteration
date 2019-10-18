'use strict';

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const max = matrix => {
  let maxItem = -Infinity;
  for (const arr of matrix) {
    if (typeof arr === 'number') {
      maxItem = arr > maxItem ? arr : maxItem;
    } else {
      for (const item of arr) {
        if (item > maxItem) maxItem = item;
      }
    }
  }
  return maxItem;
};

module.exports = { max };

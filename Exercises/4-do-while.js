'use strict';

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let result = 0;
  do {
    const num = args.pop() || 0;
    result += num;
  } while (args.length);
  return result;
};
module.exports = { sum };

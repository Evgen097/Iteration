'use strict';

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

module.exports = { sum };

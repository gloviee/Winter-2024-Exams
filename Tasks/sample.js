// Get one random element from an array

// Step 2
// fix my imprint

'use strict';

const sample = (array) => {
  randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
};

module.exports = sample;

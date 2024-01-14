// Get one random element from an array

// Step 2
// fix my imprint
// add variable value

'use strict';

const sample = (array) => {
  const randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
};

module.exports = sample;

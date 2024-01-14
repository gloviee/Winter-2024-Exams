// Reverse an array, you can't use .reverse()

// Step 4
// Fix my imprint



'use strict';

const invertArray = (array) => {
  elements = Object.keys(array);
  for (let i = 0; i < elements.length; i++) {
    elements[i] = array.pop();
  }
  return elements;
};

module.exports = invertArray;

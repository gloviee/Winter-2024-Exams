// Reverse an array, you can't use .reverse()

// Step 4
// Fix my imprint
// add variable types



'use strict';

const invertArray = (array) => {
  const elements = Object.keys(array);
  for (let i = 0; i < elements.length; i++) {
    let elements[i] = array.pop();
  }
  return elements;
};

module.exports = invertArray;

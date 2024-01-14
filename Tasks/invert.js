// Reverse an array, you can't use .reverse()

// Step 5
// try another way
// add list


'use strict';

const invertArray = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

module.exports = invertArray;

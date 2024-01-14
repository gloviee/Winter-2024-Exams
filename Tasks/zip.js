// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 6
// add variable type 

'use strict';

const zippedArray = []

const zip = (array1, array2) => {
  let i = 0;
  let j = 0;
  for (const element of array2) {
    let CELL = [array1[i++], element];
    let changedElement = CELL
    zippedArray.push(changedElement)
  }
  
  return zippedArray;
};

module.exports = zip;

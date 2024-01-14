// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 4
//don't change incoming data
//remove brackets, change it to a more comprehensible code

'use strict';

const zippedArray = []

const zip = (array1, array2) => {
  let i = 0;
  let j = 0;
  for (element of array2) {
    CELL = [array1[i++], element];
    let changedElement = CELL
    zippedArray.push(changedElement)
  }
  
  return zippedArray;
};

module.exports = zip;

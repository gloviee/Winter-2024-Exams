// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 6
// add variable type 
// add list elements check

'use strict';


const zip = (array1, array2) => {
  let i = 0;
  const zippedArray = []
  for (const element of Math.min(array1.length, array2.length)) {
    let CELL = [array1[i++], element];
    let changedElement = CELL
    zippedArray.push(changedElement)
  }
  
  return zippedArray;
};

module.exports = zip;

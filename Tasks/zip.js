// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 7
// understood that i can't put a into for loop with of operator, so rewrite the loop and make code more readable

'use strict';


const zip = (array1 = [], array2= []) => {
  const zippedArray = []
  for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
    let changedElement = [array1[i], array2[i]]
    zippedArray.push(changedElement)
  }
  
  return zippedArray;
};

module.exports = zip;

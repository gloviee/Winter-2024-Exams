// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 3
//rename variables 

'use strict';

const zip = (array1, array2) => {
  let i = 0;
  let j = 0;
  for (element of array2) {
    CELL = [array1[i++], element];
    (() => (array2[j++] = CELL))();
  }
  
  return array2;
};

module.exports = zip;

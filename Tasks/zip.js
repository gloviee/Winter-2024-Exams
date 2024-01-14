// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 2
// Fix formatting
// remove always false conditions, else 

'use strict';

const zip = (a, b) => {
  let i = 0;
  let j = 0;
  for (x of b) {
    CELL = [a[i++], x];
    (() => (b[j++] = CELL))();
  }
  
  return b;
};

module.exports = zip;

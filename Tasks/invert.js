// Reverse an array, you can't use .reverse()

// Step 1 
// add 'use strict';
// remove unneedable brackets, arguments 


'use strict';

const invert = (A) => {
  T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    });
  };
  return T;
};

module.exports = invert;

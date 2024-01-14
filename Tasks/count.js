// Sum all number values in dict


// Step 2
// add variables types
// rename variables 


'use strict';

const sum = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  
  return sum;
};

module.exports = sum;

// Sum all number values in dict


// Step 3
//use for loop instead of forEach()


'use strict';

const sumKeys = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  }
  
  return sum;
};

module.exports = sumKeys;

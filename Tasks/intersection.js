// Find an intersection of two dictionaries

// Step 2
// Add conditions for avoid incorrect format
// Add for loop
// Add object1 size argument 
// Add array for save intersections values from all dicctionaries
// remove unneedable blocks

'use strict';

const intersectionArray = [];

const intersection = (object1, object2, size = object1.length) => {
  for (let i = 0; i < size; i++) {
    if(typeof object1[i] === 'object') {
      const firstKeys = Object.keys(object1);
      for (attributeName of firstKeys) {
        if (object1[attributeName] === object2[attributeName]) {
        object2[attributeName] = object1[attributeName];
        } 
        else {
          delete object1[attributeName];
        }
      }
    }
  }
  return intersectionArray;
};

module.exports = intersection;

// Find an intersection of two dictionaries

// Step 1
// Add 'use strict';
// Add variables types
// Remove empty blocks
// Fix format
// Make better Style

'use strict';

const intersection = (object1, object2) => {
  const firstKeys = Object.keys(object1);
  for (attributeName of firstKeys) {
    if (object1[attributeName] === object2[attributeName]) {
      object2[attributeName] = object1[attributeName];
    } 
    else {
      delete object1[attributeName];
    }
  return object1;
};

module.exports = intersection;

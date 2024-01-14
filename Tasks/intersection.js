// Find an intersection of two dictionaries

// Noticed that intersection.test.js included 3 objects, where 3rd object was output
// I thought we have a list of dictionaries and a dictionary one. 
// Here i will remake it 

// All steps
// remove empty blocks
// improve style
// add variables type
// Fix format 
// don't change incoming data 
// remove else block 


'use strict';

const intersectionArray = {}

const intersection = (object1, object2) => {
  const firstKeys = Object.keys(object1);
  for (attributeName of firstKeys) {
    if (object1[attributeName] === object2[attributeName]) {
      object2[attributeName] = object1[attributeName];      
      intersectionArray[attributeName] = object1[attributeName];
    } 
  }
  return intersectionArray;
};

module.exports = intersection;

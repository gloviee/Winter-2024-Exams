// Sum all number values in dict


// Step 1
// Format code indentation and spacing
// Remove empty blocks
// Add 'use strict';

'use strict';

count = (obj) => {
  sum = 0;
  keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  
  return sum;
};

module.exports = count;

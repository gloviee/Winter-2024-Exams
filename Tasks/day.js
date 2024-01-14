// Get day number

// Step 1
// Add 'use strict';
// make better Style
// add variables type
// rename variables

'use strict';

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (day.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  
  return -1;
};

module.exports = parseDay;

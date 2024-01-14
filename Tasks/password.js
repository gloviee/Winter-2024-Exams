// Generate random password

// Step 1
// add 'use strict';
// prefer const instead of let
// add variables type


'use strict';

const GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;

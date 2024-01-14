// Generate random password

// Step 3
// fix my imprint 


'use strict';

const GeneratePassword = (alphabet, size) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < size; i++) {
    const index = Math.floor(Math.random() * MAX);
    key += alphabet[index];
  }
  return key;
};

module.exports = GeneratePassword;

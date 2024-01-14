// Generate random password

// Step 2
// rename variable
// use assignment operator 


'use strict';

const GeneratePassword = (alphabet, size) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < size; i++) {
    const index = Math.floor(Math.random() * MAX);
    key += alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;

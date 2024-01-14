// Get month number

// Step 2
// rename variables 
// replace code 

const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (month) => {
  const amount = Months.length;
  for (let i = 0; i < amount; i++) {
    if (month.startsWith(Months[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;

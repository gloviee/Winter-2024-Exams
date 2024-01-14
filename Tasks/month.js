// Get month number

// Step 3
// lowercase the variable value 
// remove unneedable code

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
  month = month.toLowerCase();
  for (let i = 0; i < amount; i++) {
    if (month.startsWith(Months[i]) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;

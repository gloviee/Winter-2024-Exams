// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 7
// understood that i can't put a into for loop with of operator, so rewrite the loop and make code more readable



const zip = function (a = [], b = []) {
  let i = 0;
  j = 0;
  for (x of b) {
    CELL = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = CELL))();
    }
    if (CELL[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zip;


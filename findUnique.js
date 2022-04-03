"use strict";

const findUniq = function (arr) {
  const values = [];
  let val1Ctr = 0;
  let val2Ctr = 0;

  for (const [i, value] of arr.entries()) {
    if (values.includes(value)) continue;
    values.push(value);
  }

  for (const value of arr) {
    if (value === values[0]) val1Ctr++;
    if (value === values[1]) val2Ctr++;
  }

  return val1Ctr > val2Ctr ? values[1] : values[0];
};

console.log(findUniq([3, 10, 3, 3, 3]));

// Best practice:
/*
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
*/

// you basically sort the array, then if the first two values are the same, get the last value. else, get the first value.

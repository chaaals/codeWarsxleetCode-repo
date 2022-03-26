"use strict";

const digital_root = (n) => {
  let num = `${n}`;
  let sum = 0;
  while (num.length !== 1) {
    sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    num = `${sum}`;
  }
  return sum;
};

console.log(digital_root(16));

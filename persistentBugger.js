"use strict";

const persistence = function (num) {
  const digits = Array.from({ length: 10 }, (_, i) => i++);
  let ctr = 1;
  let isDigit = false;

  if (digits.includes(num)) return 0;

  while (!isDigit) {
    num = String(num)
      .split("")
      .map((num) => Number(num))
      .reduce((acc, num) => acc * num, 1);

    if (digits.includes(num)) {
      isDigit = true;
      break;
    }
    ++ctr;
  }

  return ctr;
};

console.log(persistence(4));

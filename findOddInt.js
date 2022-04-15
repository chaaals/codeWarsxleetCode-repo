"use strict";

const findOdd = function (a) {
  const objOccurance = {};
  a.map((num) =>
    num in objOccurance
      ? (objOccurance[`${num}`] += 1)
      : (objOccurance[`${num}`] = 1)
  );

  const oddInt = Object.values(objOccurance)
    .map((value) => value)
    .sort((a, b) => b - a)
    .find((value) => value % 2 !== 0);

  return Number(
    Object.keys(objOccurance).find((key) => objOccurance[`${key}`] === oddInt)
  );
};

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));

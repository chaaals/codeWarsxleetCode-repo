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
    .reduce((acc, value) => (acc > value ? acc : value));

  return Object.keys(objOccurance).find(
    (key) => objOccurance[`${key}`] === oddInt
  );
};

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

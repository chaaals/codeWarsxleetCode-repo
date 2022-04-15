"use strict";

const findNextSquare = function (sq) {
  const root = Math.trunc(Math.sqrt(sq));

  if (root ** 2 === sq) return (root + 1) ** 2;
  return -1;
};

console.log(findNextSquare(625));

"use strict";

const order = function (words) {
  if (words === "") return "";

  const numRegex = /[1-9]/g;
  const wordsCopy = words.split(" ");
  const restructure = [];
  const objMatches = {};

  wordsCopy.map((word, i) => (objMatches[`${word.match(numRegex)[0]}`] = i));

  for (const key in objMatches) {
    restructure.push(wordsCopy[objMatches[`${key}`]]);
  }
  return restructure.join(" ");
};

console.log(order("is2 Thi1s T4est 3a"));

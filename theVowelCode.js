"use strict";
const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
const encode = function (string) {
  return string
    .split("")
    .map((character) =>
      character in vowels ? vowels[`${character}`] : character
    )
    .join("");
};

const decode = function (string) {
  return string
    .split("")
    .map((character) =>
      Number(character)
        ? Object.keys(vowels).find(
            (key) => vowels[`${key}`] === Number(character)
          )
        : character
    )
    .join("");
};

console.log(decode("h2ll4"));

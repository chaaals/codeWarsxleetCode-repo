"use strict";

const accum = function (s) {
  const characters = s.toLowerCase().split("");

  return characters
    .map((character, i) => character.repeat(++i))
    .map((character) => character[0].toUpperCase() + character.slice(1))
    .join("-");
};

console.log(accum("abcde"));

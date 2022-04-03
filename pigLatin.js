"use strict";

const pigIt = function (str) {
  const words = str.split(" ");
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  for (const [i, word] of words.entries()) {
    if (regex.test(word)) continue;
    let tmpStr = word.split("");
    tmpStr.push(`${tmpStr[0]}ay`);
    tmpStr.shift();
    words[i] = tmpStr.join("");
  }
  return words.join(" ");
};

console.log(pigIt("Pig latin is cool !"));

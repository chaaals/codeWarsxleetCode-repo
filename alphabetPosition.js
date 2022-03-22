"use strict";
/*
Replace With Alphabet Position
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// Solution
const alphabetPosition = function (text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterAndIndex = {};
  let newText = new Array();

  // adds a key value pair on the letterAndIndex object
  for (let i = 1; i <= alphabet.length; i++) {
    letterAndIndex[`${alphabet[i - 1]}`] = `${i}`;
  }

  text.toLowerCase();
  for (let i = 0; i <= text.length - 1; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      // if else block that scans through the characters of a text
      if (text[i].toLowerCase() === alphabet[j]) {
        newText.push(`${letterAndIndex[`${alphabet[j]}`]}`);
      } else {
        continue;
      }
    }
  }

  text = "";
  for (let k = 0; k < newText.length; k++) {
    text += k + 1 === newText.length ? `${newText[k]}` : `${newText[k]} `;
  }
  return text;
};

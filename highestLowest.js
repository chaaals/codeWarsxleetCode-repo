"use strict";

const highAndLow = function (numbers) {
  const arrNumbers = numbers.split(" "); // Splits the string into an array

  arrNumbers.sort(function (a, b) {
    return a - b;
  }); // Sorts the array to ascending order
  return `${arrNumbers[arrNumbers.length - 1]} ${arrNumbers[0]}`; // returns highest and lowest number.
};

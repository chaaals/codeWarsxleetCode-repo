"use strict";

/*
    You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

    Examples
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)
*/
const findOutlier = function (integers) {
  const isEven = new Array();
  const isOdd = new Array();
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? isEven.push(integers[i]) : isOdd.push(integers[i]);
  }

  return isEven.length > isOdd.length ? isOdd[0] : isEven[0];
};

const arr = [2, 4, 0, 100, 4, 11, 2602, 36];

console.log(findOutlier(arr));

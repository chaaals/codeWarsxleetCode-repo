"use strict";

const sumDigPow = function (a, b) {
  const sampleSpace = Array.from({ length: b - a + 1 }, () => a++);
  let validDigPow = [];

  sampleSpace.forEach(function (value, i) {
    let sample = String(value).split("");
    sample = sample
      .map((val, i) => Number(val) ** (i + 1))
      .reduce((acc, num) => acc + num, 0);
    if (+sample === value) validDigPow.push(+sample);
  });

  return validDigPow;
};

sumDigPow(90, 100);

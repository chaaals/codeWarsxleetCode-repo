"use strict";

const towerBuilder = function (nfloors) {
  const floors = Array.from({ length: nfloors }).fill("*");
  let odd = 0;
  let spaces = " ";

  floors.forEach((floor, i) => {
    floors[i] = floor.repeat(!odd ? (odd += 1) : (odd += 2));
  });

  let rptValue = Math.round(floors[floors.length - 1].length / 2);
  floors.forEach((floor, i) => {
    let concatSpaces = spaces.repeat(--rptValue);
    floors[i] = `${concatSpaces}${floor}${concatSpaces}`;
  });

  return floors;
};

towerBuilder(5);

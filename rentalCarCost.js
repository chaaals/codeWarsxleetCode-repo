"use strict";

const rentalCarCost = function (d) {
  const rental = 40;
  let costs = Array.from({ length: d }).fill(rental);

  costs = costs.map((cost, i) =>
    i === 2 || i === 6 ? (i === 2 ? cost - 20 : cost - 30) : cost
  );

  return costs.reduce((acc, cost) => acc + cost);
};

console.log(rentalCarCost(8));

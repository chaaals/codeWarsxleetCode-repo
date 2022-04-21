"use strict";

const queueTime = function (customers, n) {
  let tills = Array.from({ length: n }).fill(0);

  customers.forEach((customer, i) => {
    let lowestIndex = tills.findIndex(
      (till) => till === tills.reduce((acc, till) => (acc < till ? acc : till))
    );
    tills[lowestIndex] += customer;
  });

  return tills.reduce((acc, cur) => (acc > cur ? acc : cur));
};

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
// console.log(queueTime([2, 3, 10], 2));

// var arr = new Array(n).fill(0); // [0,0]

// for (var i = 0; i < customers.length; i++) {
//   var idx = arr.indexOf(Math.min(...arr)); // idx = 0, idx = 1
//   arr[idx] += customers[i]; // arr[0] += customers[0],  arr[1] += customers[1], arr[0] += customers[2]
// }

// return Math.max(...arr);

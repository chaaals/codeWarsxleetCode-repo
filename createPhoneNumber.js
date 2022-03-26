"use strict";

const numArr = [1, 2, 3, 4, 5, 8, 7, 8, 9, 0];
let phoneNumber = "(xxx) xxx-xxxx";
// best practice
const createPhoneNumber = (numArr) => {
  for (let i = 0; i < numArr.length; i++) {
    phoneNumber = phoneNumber.replace("x", numArr[i]);
  }
  return phoneNumber;
};

// Initial solution
// const createPhoneNumber = (numArr) => {
//   let str = "";
//   for (let i = 0; i < numArr.length; i++) {
//     str += numArr[i];
//   }
//   return `(${str[0] + str[1] + str[2]}) ${str[3] + str[4] + str[5]}-${
//     str[6] + str[7] + str[8] + str[9]
//   }`;
// };

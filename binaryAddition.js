/*
    Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

    The binary number returned should be a string.

    Examples:(Input1, Input2 --> Output (explanation)))

    1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
    5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

const addBinary = function (a, b) {
  const sum = a + b;
  return sum.toString(2);
};

console.log(addBinary(5, 9));

// What I've learned: .toString() method can convert a number into a binary number. The method accepts a radix parameter. basically defining the base of the numeral system so if num.toString(2), it converts it into a binary while num.toString(16) converts it into a hexidecimal string

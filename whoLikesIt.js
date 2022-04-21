"use strict";

const likes = function (names) {
  let whoLiked = names.slice();

  if (!whoLiked.length) return "no one likes this";

  if (whoLiked.length === 1 || whoLiked.length === 2)
    return whoLiked.length === 1
      ? `${whoLiked[0]} likes this`
      : whoLiked.join(" and ") + " like this";

  if (whoLiked.length > 0 && whoLiked.length < 4)
    return (
      whoLiked.slice(0, 2).join(", ") + ` and ${whoLiked.slice(2)} like this`
    );

  return (
    whoLiked.slice(0, 2).join(", ") +
    ` and ${whoLiked.length - 2} others like this`
  );
};

console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Jake", "Amy", "Terry"]));

// const likes = function (names) {
//     let whoLiked = names.slice();

//     if (whoLiked.length === 0) return "no one likes this";

//     if (whoLiked.length === 1) return `${whoLiked[0]} likes this`;

//     if (whoLiked.length === 2) return whoLiked.join(" and ") + ' like this';

//     if (whoLiked.length > 0 && whoLiked.length < 4) {
//       const sentence = whoLiked.map((name, i) =>
//         i === whoLiked.length - 1
//           ? `${name}`
//           : `${name}${i === whoLiked.length - 2 ? " and" : ","}`
//       );

//       return sentence.join(" ") + ' like this';
//     }

//     return whoLiked.slice(0, 2).join(", ") + ` and ${whoLiked.length - 2} others like this`;
//   };

const solution = function (string) {
  const strRegex = /[A-Z]/g;
  const [...characters] = string;
  let newString = "";
  let i = 1;

  while ((match = strRegex.exec(string)) != null) {
    characters.splice(
      characters.includes(" ") ? match.index + i++ : match.index,
      0,
      " "
    );
  }

  for (let i = 0; i < characters.length; i++) {
    newString += characters[i];
  }
  return newString;
};

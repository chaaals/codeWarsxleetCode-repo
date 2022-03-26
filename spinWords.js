const spinWords = (sentence) => {
  const subStrings = sentence.split(" ");

  for (let i = 0; i < subStrings.length; i++) {
    if (subStrings[i].length >= 5) {
      subStrings[i] = subStrings[i].split("").reverse().join("");
    } else {
      continue;
    }
  }
  return subStrings.join(" ");
};

spinWords("Hey fellow warriors");

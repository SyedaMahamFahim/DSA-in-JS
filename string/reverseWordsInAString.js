// reverseWordsInAString

var reverseWords = function (s) {
  const removeExtraSpaces = s.replace(/\s+/g, " ").trim();
  const words = removeExtraSpaces.split(" ");
  const wordsArrayLength = words.length - 1;
  var reverseWord = "";
  for (let i = wordsArrayLength; i >= 0; i--) {
    reverseWord = reverseWord + words[i] + " ";
    if (i === 0) {
      reverseWord = reverseWord.trim();
    }
  }
  return reverseWord;
};

// const word = "  hello world  ";
const word ="the sky is blue"
// const word ="a good   example"
console.log(reverseWords(word));

// wordPattern.js

function countWords(sentence) {
  // Use split to separate words based on spaces
  const wordsArray = sentence.split(" ");

  // Filter out empty sings (double spaces or leading/trailing spaces)
  const nonEmptyWords = wordsArray.filter((word) => word.trim() !== "");

  // Return the count of non-empty words
  return nonEmptyWords.length;
}

const wordPattern = (pattern, s) => {
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!charToWord.has(char) && !wordToChar.has(word)) {
            charToWord.set(char, word);
            wordToChar.set(word, char);
        } else {
            if (charToWord.get(char) !== word || wordToChar.get(word) !== char) {
                return false;
            }
        }
    }

    return true;
};

let pattern, s;
(pattern = "abba"), (s = "dog cat cat dog");
const result = wordPattern(pattern, s);
console.log(result);

// validPalindrome

var isPalindrome = function (s) {
  let removeExtraCharacters = s.replace(/[^a-zA-Z0-9_]/g, "").replace(/_/g, "")
  const removeSpaces = removeExtraCharacters.replace(/\s+/g, "");
  const stringLowerCase = removeSpaces.toLowerCase();
  const size = stringLowerCase.length - 1;
  var reverseWord = "";
  for (let i = size; i >= 0; i--) {
    reverseWord = reverseWord + stringLowerCase[i];
    if (i === 0) {
      reverseWord = reverseWord.trim();
    }
  }
  return reverseWord === stringLowerCase ? true : false
};

// let s = "A man, a plan, a canal: Panama";
// s = "race a car"
// s = " "
s =
"ab_a"
console.log(isPalindrome(s));

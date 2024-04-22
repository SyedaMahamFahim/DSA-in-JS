//reverseTheString.js
const reverseTheString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

let str;
str = "best";
console.log(reverseTheString(str));

// permutationInString
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let p = s1;
  let s = s2;

  let charObj = {};
  let k = p.length; // Window Size

  // Creating a hash table to store the characters of the pattern with their counts

  for (let char of p) {
    charObj[char] ? (charObj[char] += 1) : (charObj[char] = 1);
  }


  let countChars = k; // Count of characters in the pattern
  let i = 0;
  let j = 0;

  // Looping through the string
  while (j < s.length) {
    if (charObj[s[j]] !== undefined) {
      if (charObj[s[j]] > 0) {
        countChars--;
      }
      charObj[s[j]]--;
    }
    // If the length of the window is same as the pattern length
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // If count is zero then increase the anagrams, means the anagram is found
      if (countChars === 0) {
        return true;
      }

      if (charObj[s[i]] !== undefined) {
        if (charObj[s[i]] >= 0) {
          countChars++;
        }
        charObj[s[i]]++;
      }
      // Slide the window
      i++;
      j++;
    }
  }
  return false;
};

let s1, s2;
s1 = "ab";
s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));

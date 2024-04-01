/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashmap = new Map();
  for (let str of strs) {
    // Sort the characters of the string alphabetically
    const sortedStr = str.split("").sort().join("");

    // Check if the sorted representation exists in the hashmap
    // If not, initialize it with an empty array
    if (!hashmap.has(sortedStr)) {
      hashmap.set(sortedStr, []);
    }

    // Add the original string to the corresponding group
    hashmap.get(sortedStr).push(str);
  }

  // Return the values from the hashmap as the result
  return Array.from(hashmap.values());
};

let strs;
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);

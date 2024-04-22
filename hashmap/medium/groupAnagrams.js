/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashmap = new Map();
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!hashmap.has(sortedStr)) {
      hashmap.set(sortedStr, []);
    }
    
    hashmap.get(sortedStr).push(str);
  }

  return Array.from(hashmap.values());
};

let strs;
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);

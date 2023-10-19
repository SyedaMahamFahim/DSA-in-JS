function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }

    strs.sort(); // Sort the array of strings lexicographically.
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let commonPrefix = '';
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === lastStr[i]) {
            commonPrefix += firstStr[i];
        } else {
            break; // Stop when a character mismatch is found.
        }
    }

    return commonPrefix;
}

const input1 = ["flower", "flow", "flight"];
const input2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(input1)); // Output: "fl"
// console.log(longestCommonPrefix(input2)); // Output: ""

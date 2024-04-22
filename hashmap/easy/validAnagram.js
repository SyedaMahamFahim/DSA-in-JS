// validAnagram.js

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/


const validAnagram=(s,t)=>{
    if (s.length !== t.length) {
        return false;
    }
    const map=new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
          map.set(s[i], map.get(s[i]) + 1)
        } else {
          map.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i]) || map.get(t[i]) === 0) {
          return false;
        }
        
        map.set(t[i], map.get(t[i]) - 1)
      }
    return true
}

let s,t;
s = "anagram", t = "nahgaram"

const result=validAnagram(s,t)
console.log(result)
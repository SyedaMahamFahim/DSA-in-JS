### Prefix:
In DSA, a prefix of a string is any substring that includes the characters from the beginning of the string up to a certain index. For example, in the string "abcdef", the prefixes would be:
- Prefix at index 0: "a"
- Prefix at index 1: "ab"
- Prefix at index 2: "abc"
- Prefix at index 3: "abcd"
- Prefix at index 4: "abcde"
- Prefix at index 5: "abcdef"

### Suffix:
Similarly, a suffix of a string is any substring that includes the characters from a certain index up to the end of the string. Using the same example string "abcdef", the suffixes would be:
- Suffix at index 0: "abcdef"
- Suffix at index 1: "bcdef"
- Suffix at index 2: "cdef"
- Suffix at index 3: "def"
- Suffix at index 4: "ef"
- Suffix at index 5: "f"

### Working
For ones, who did not understand how prefix-postfix works, lets change 1, 2, 3, 4 positions to symbols like a, b, c, d, so multiplying will be:
prefix:
->
|       a       |   a*b   | a*b*c | a*b*c*d |
postfix:
<-
| a*b*c*d | b*c*d |   c*d   |      d        |

the result is a multiply without the symbol in own position (the left value from prefix and the right one from postfix):
|    b*c*d  | a*c*d | a*b*d |   a*b*c   |
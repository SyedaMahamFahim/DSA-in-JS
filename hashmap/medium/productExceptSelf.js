// productExceptSelf
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    return answer;
};

let nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);


/*

Explanation
: This code is calculating the product of all elements in an array except
 the element at the current index. It is doing this in two passes - one to calculate the prefix product array and one to calculate the suffix product array. It then multiplies the corresponding

 For ones, who did not understand how prefix-postfix works, lets change 1, 2, 3, 4 positions to symbols like a, b, c, d, so multiplying will be:
prefix:
->
|       a       |   a*b   | a*b*c | a*b*c*d |
postfix:
<-
| a*b*c*d | b*c*d |   c*d   |      d        |

the result is a multiply without the symbol in own position (the left value from prefix and the right one from postfix):
|    b*c*d  | a*c*d | a*b*d |   a*b*c   |

*/
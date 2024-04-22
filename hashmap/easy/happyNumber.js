// happyNumber.js
/*
A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit. If, in the process, the number loops endlessly in a cycle that does not include 1, then it's not a happy number.

Here are the steps to determine if a number is a happy number:

Start with any positive integer.
Replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (a happy number) or enters a cycle that does not include 1 (an unhappy number).
Let's take an example to illustrate the process:

*/

function isHappy(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n);
    }

    return n === 1;
}

function getSumOfSquares(num) {
    let sum = 0;
    // console.log("num",num);
    while (num > 0) {
        const digit = num % 10;
        console.log("digits",digit);
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    console.log('sum',sum)
    return sum;
}

// Example usage:
console.log(isHappy(19)); // Output: true

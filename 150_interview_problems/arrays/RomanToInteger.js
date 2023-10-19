// RomanToInteger.js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i])
        // console.log(table[s[i]])
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (table[s[i]] < table[s[i+1]]) {
            console.log(table[s[i]],":",s[i] ,"<",table[s[i+1]],":",s[i+1])
            
            result-=table[s[i]]
            console.log("result:",result)
        } 
        //otherwise, add like normal. 
        else {
            console.log(table[s[i]],":",s[i] ,"<",table[s[i+1]],":",s[i+1])

            result+=table[s[i]]
            console.log("result:",result)
        }
    }
    return result
    
};

let s ="MCMXCIV"
console.log(romanToInt(s))
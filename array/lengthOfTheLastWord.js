// lengthOfTheLastWord.js

// var lengthOfLastWord = function(s) {
//     var lis = s.replace(/\s+/g, " ")
//     .replace(/^\s+|\s+$/g, "")
//     .replace(/ +(\W)/g, "$1");
    
//     return lis.split(" ")[lis.split(" ").length - 1].length;
// };

var lengthOfLastWord = function(s) {
    var lis = s.split(" ")
    var tempArray=[]
    console.log('before split', lis)
    for (let i = 0; i < lis.length; i++) {
        if(lis[i] !== ""){
            tempArray.push(lis[i])
        }
    }
    return tempArray[tempArray.length-1].length
};
let s ="   fly me   to   the moon  "
console.log(lengthOfLastWord(s))
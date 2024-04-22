// indexOfTheFirstOccurrenceInAString
var strStr = function(haystack, needle) {
    const haystackLength=haystack.length
    const needleLength=needle.length
    let matches=[]
    for (let i = 0; i < haystackLength; i++) {
        let match=true;
        for (let j = 0; j < needleLength; j++) {
            if(haystack[i+j] !== needle[j]){
                match=false;
                break
            }
        }
        if(match){
            matches.push(i)
        }
    
    }
    if(matches.length===0){
        return -1
    }
    return matches[0]
};




const haystack = "hello", needle = "ll"
console.log(strStr(haystack, needle))
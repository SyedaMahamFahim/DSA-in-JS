// camelCase.js

function camelcase(s) {
    let count=0
    // Write your code here
    for(let i =0; i <= s.length; i++){
        character = s.charAt(i);
        if(character === character.toUpperCase()){
            count++
        }
    }
    return count++

}
console.log(camelcase('saveChangesInTheEditor'))
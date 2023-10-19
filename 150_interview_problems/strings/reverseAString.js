// reverseAString
const reverseAString = (str) => {
    const strLength = str.length;
    let tempString = "";
    for (let i = strLength - 1; i >= 0; i--) {
        tempString = tempString + str[i];
    }
    console.log(tempString);
}

const givenString = "maham";  
reverseAString(givenString);  
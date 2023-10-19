// negativeElementsInArray.js
// Write a  program to print all negative elements in an array.
const negativeElementsInArray=(arr)=>{
    for(let i=0; i < arr.length; i++){
        if(arr[i] <0){
            console.log(`Position ${i} : Value ${arr[i]}`)
        } 
    }
}

const givenArray=[4,6,-5,-200,69]
const result= negativeElementsInArray(givenArray)
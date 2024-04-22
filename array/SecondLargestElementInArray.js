// Write a C program to find second largest element in an array.
// SecondLargestElementInArray


const SecondLargestElementInArray=(arr)=>{
    let firstLargestNumber=0;
    let secondLargestNumber=0;
    for(let i=0; i < arr.length; i++){
        if(firstLargestNumber < arr[i]){
            secondLargestNumber= firstLargestNumber
            firstLargestNumber = arr[i]
            
        }
        else if(secondLargestNumber < arr[i] && arr[i] <  firstLargestNumber){
            secondLargestNumber= arr[i]
        }
        
    }
      return secondLargestNumber
    
}

const givenArray=[4,6,-5,200,69]
const result= SecondLargestElementInArray(givenArray)
console.log(result)



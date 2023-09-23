
const cloneOfArray = (arr) => {
    let size = arr.length;
    let cloneArray=[]
    for (let i = 0; i < size; i++) {
      cloneArray[i]=arr[i]
      
    }
    return cloneArray
}

const givenArray = [1, 3, 4, 5];
const result =cloneOfArray(givenArray);
console.log(result)

const practice=(nums)=>{
    const size=nums.length
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if(nums[i]===nums[j+1]) {
                console.log(nums[i])
            }
            
        }
    }
}

const givenArray = [1,2,4,4,4,5,6];

const result = practice(givenArray);
// console.log(result);
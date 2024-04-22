// pairSum
function pairSum(array, target) {
    let start = 0;
    let end = array.length - 1;
    let pairCount = 0;
    while(start < end) {
        if((array[start] + array[end]) > target) {
            end--;
        } else if((array[start] + array[end]) < target) {
            start++;
        } else {
            if(array[start] !== array[end]) {
                let count1 = 0;
                let count2 = 0;
                let leftElement = array[start];
                let rightElement = array[end];
                while(array[start] === leftElement) {
                    start++;
                    count1++;
                }
                while(array[end] === rightElement) {
                    end--;
                    count2++;
                }
                pairCount = pairCount + (count1*count2);
            } 
            if(array[start] === array[end]) {
                pairCount = pairCount + numberOfPairsForSameNumber(end-start);
                return pairCount;
            }
        }
    }

    return pairCount;
}

function numberOfPairsForSameNumber(n) {
    return Math.floor(n*(n+1)/2);
}

const arr = [1,4,4,5,5,5,6,6,11];
const target = 11;
console.log(pairSum(arr, target));
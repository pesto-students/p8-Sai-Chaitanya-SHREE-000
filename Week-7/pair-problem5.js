function findPair(arr, diff) {
    for(let i = 0; i < arr.length - 1; i ++) {
        for(let j = i + 1; j < arr.length; j ++) {
            if(Math.abs(arr[i] - arr[j]) === diff ) return 1;
        }
    };
    return 0;
}

const inputArr = [2, 4, 23, 6];
const isPair = findPair(inputArr, 3);
console.log(isPair);
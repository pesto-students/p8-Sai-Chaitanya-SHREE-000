function findSubArr(arr) {
    let subArr = [];
    let largeSum = -Infinity;
    let largeSumIndex = -1;
    let startIndex = -1;
    let endIndex = -1;

    for(let i = 0; i < arr.length; i ++) {
        let sum = 0;
        for(let k = i; k < arr.length; k ++) {
            sum += arr[k];
            if(largeSum < sum) {
                largeSum = sum;
                startIndex = i;
                endIndex = k;
            }
        }
    };

    for (let i = startIndex; i <= endIndex; i ++) { 
        subArr.push(arr[i]);
    };
    return subArr;
};

const inputArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const inputArr = [1, 2, 3, 4, -10];
const subArr = findSubArr(inputArr);
console.log(subArr);
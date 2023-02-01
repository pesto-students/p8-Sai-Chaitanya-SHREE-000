function sortArr(arr) {
    let sortedArr = [];
    let zeroArr = [];
    let oneArr = [];
    let twoArr = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] === 0) zeroArr.push(arr[i]);
        if(arr[i] === 1) oneArr.push(arr[i]);
        if(arr[i] === 2) twoArr.push(arr[i]) ;      
    };
    sortedArr.push(...zeroArr, ...oneArr, ...twoArr);
    return sortedArr;
}

const inputArr = [2, 1, 0, 1, 0, 2]
const sortedArr = sortArr(inputArr)
console.log(sortedArr);


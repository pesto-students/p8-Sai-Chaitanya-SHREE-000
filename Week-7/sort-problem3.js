function sortArr(arr) {
    let sortedArr = [];
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] === 0) zeroCount ++;
        else if(arr[i] === 1) oneCount ++;
        else twoCount ++;      
    };
    for(let i = 0; i < zeroCount; i ++) sortedArr.push(0);
    for(let i = 0; i < oneCount; i ++) sortedArr.push(1);
    for(let i = 0; i < twoCount; i ++) sortedArr.push(2);
    return sortedArr;
}

const inputArr = [2, 1, 0, 1, 0, 2]
const sortedArr = sortArr(inputArr)
console.log(sortedArr);


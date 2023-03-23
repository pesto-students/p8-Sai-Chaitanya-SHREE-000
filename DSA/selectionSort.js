const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i ++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j ++) {
            if(arr[j] < arr[lowest]) lowest = j;
        };
        if(lowest !== i) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    return arr;
};

const arr = [3, 14, 76, 12, 91];
const result = selectionSort(arr);
console.log(result, 'result');
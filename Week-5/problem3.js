const hasDuplicate = arr => {
    const newArr = new Set(arr);
    for (const item of newArr) {
        return newArr.has(item)
    }
}
console.log(hasDuplicate([1,5,-1,4]));

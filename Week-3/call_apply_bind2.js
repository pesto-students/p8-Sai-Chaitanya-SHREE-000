function add(a, b) {
    return this.a + this.b;
}
// bind method
const addBindFunc = add.bind({a: 10, b: 20});
console.log(addBindFunc());

// call method
console.log(add.call({a: 10, b: 50}));

// apply method
function maxNum(...numbers) {
    return Math.max(...numbers)
}
const numbers = [3,53, 5, 74, 1, 34]
console.log(maxNum.apply(null, numbers));

const minNum = Math.min.apply(null, numbers)
console.log(minNum);

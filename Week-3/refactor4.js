function createStack() {
// Write your code here...
const items = []
return {
    item: items,
    push(item) {
        this.item.push(item);
    },
    pop() {
        return this.item.pop();
    }
};
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);
// stack.items;// => undefined
 
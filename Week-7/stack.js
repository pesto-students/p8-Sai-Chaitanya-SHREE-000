class Stack {
    constructor() {
        this.items = [];
    }
    length() {
        return this.items.length;
    }
    push(value) {
        return this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.length();
    }
    search(value) {
        if(this.items.includes(value)) return true;
        else return false;
    }
    print() {
        return this.items;
    }
};

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.search(12));
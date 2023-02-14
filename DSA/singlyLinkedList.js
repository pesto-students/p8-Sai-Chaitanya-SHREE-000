class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        if(this.size === 0) return true;
    }

    length() {
        return this.size;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) this.head = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size ++;
    }

    shift() {
        if(this.isEmpty()) return 'NULL LIST';
        else {
            let current = this.head;
            this.head = current.next;
            this.size --;
        }
    }

    push(value) {
        const newNode = new Node(value);
        let current = null;
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
        // while(current.next) {
        //     current = current.next;
        // }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size ++;
    return current;
    }

    pop() {
        if(!this.isEmpty()) {
            let current = this.head;
            let count = 1;
            while(count < this.size - 1) {
                current = current.next;
                count ++;
            }
            current.next = null;
            // console.log(this.head, 'head');
            // console.log(this.tail, 'tail');
            // this.tail = null;
            this.size --;
        }
    }

    search(element) {
        let current = this.head;
        if(!this.isEmpty()) {
            while(current.next) {
                if(current.data === element) return true;
                current = current.next;
            }
            if(current.data === element) return true;
        }
        return false;
    }

    getAt(index) {
        if (index < this.length() && index >= 0) {
        let current = this.head;
        let count = 0;
        while(count < index) {
            current = current.next;
            count ++;
        }
        return current.data;
        }
    }

    insertAt(value, index) {
        let newNode = new Node(value);
        if (index < this.length() && index >= 0) {
        let current = this.head;
        if(index === 0) return this.unshift(value);  
        else if(index + 1 === this.length()) return this.push(value); 
        else {  
        let count = 0;
        while(count < index - 1) {
            current = current.next;
            count ++;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size ++;
        return current;
        }
      }
    }

    removeAt(index) {
        if (index < this.length() && index >= 0) {
        let current = this.head;
        if(index === 0) return this.shift();  
        else if(index + 1 === this.length()) return this.pop(); 
        else {  
        let count = 0;
        while(count < index - 1) {
            current = current.next;
            count ++;
        }
        current.next = current.next.next;
        this.size --;
        return current;
        }
      }
    }

    print() {
        if(!this.isEmpty()) {
        let current = this.head;
        while(current.next) {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
        return current;
      }
    }
}

const ll = new LinkedList();

ll.push(2);
ll.push(3); 
// ll.push(4);
// ll.push(12);
// ll.push(13);
ll.pop()
// ll.push(14);
// ll.unshift(100)
// ll.removeAt(1)
// console.log(ll.insertAt(1000, 6));
ll.print();
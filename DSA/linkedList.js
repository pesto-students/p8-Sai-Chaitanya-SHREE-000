class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size ++;
    }
    // Insert last node
    insertLastNode(data) {  
        const node = new Node(data);
        let current = null;
        if(!this.head) this.head = node;
        else {
            current = this.head;
            while(current.next) current = current.next;
            current.next = node;
        }
        this.size ++;
        return current;
    }
    // Insert at index
    insertAt(data, index = null) {
        // Insdex is out of range
        if (index > 0 && index > this.size) return "Invalid index";
        // First index
        if (index === 0) return this.insertFirst(data);
        const node = new Node(data);
        let previous = null;
        let current = this.head; // Set current to first
        let count = 0;
        while(count < index) {
            previous = current; // Node before index
            current = current.next; // Node after index
            count ++;
        }
        node.next = current; 
        previous.next = node;
        this.size ++;
    }
    // Get at index
    getAt(index = 0) {
        if (index + 1 > this.size || index < 0) return "Wrong index";
        let count = 0;
        let current = this.head;
        while(count < index) {
            current = current?.next;
            count ++;
        }
        return current?.data; 
    }
    // Remove at index
    removeAt(index = 0) {
        if (index + 1 > this.size || index < 0) return "Wrong index";
        // First index
        let count = 0;
        let previous = null;
        let current = this.head;
        if (index === 0) return this.head = current.next;
        while(count < index) {
            previous = current
            current = current.next;
            count ++;
        }
        previous.next = current.next;
        this.size --;
        return previous;
    }
    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // Print list data
    printData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLastNode(500);
ll.insertAt('inserted at first index', 1)
ll.getAt(-10);
ll.removeAt(1)
ll.printData();
// console.log(ll);
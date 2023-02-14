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
    insertFirstNode(data) {
        this.head = new Node(data, this.head);
        this.size ++;
    }
    insertAtLastNode(data) {
        const node = new Node(data);
        let current = null;
        if(this.head === null) this.head = node;
        else {
            current = this.head;
            while(current.next) current = current.next;
            current.next = node;
        }
        this.size ++;
        return current;
    }
    printLinkedList() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
      
        // traverse list and adjust links
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = null;
        }
        this.head = prevNode; // reset head
        return this.head;
    }

    rotate(k) {
    if (k == 0)
        return;
 
    // Let us understand the below code
    // for example k = 4 and list =
    // 10->20->30->40->50->60.
    var current = this.head;
 
    // current will either point to kth or
    // NULL after this loop. current will
    // point to node 40 in the above example
    var count = 1;
 
    while (count < k && current != null)
    {
        current = current.next;
        count++;
    }
 
    // If current is NULL, k is greater than
    // or equal to count of nodes in linked list.
    // Don't change the list in this case
    if (current == null)
        return;
 
    // current points to kth node. Store it in
    // a variable. kthNode points to node 40
    // in the above example
    var kthNode = current;
 
    // current will point to last node after
    // this loop current will point to node
    // 60 in the above example
    while (current.next != null)
        current = current.next;
 
    // Change next of last node to previous
    // head Next of 60 is now changed to
    // node 10
    current.next = this.head;
 
    // Change head to (k+1)th node
    // head is now changed to node 50
    this.head = kthNode.next;
 
    // change next of kth node to null
    kthNode.next = null;
}
detectLoop(h) {
    var s = new Set();
    while (h != null) {
        // If we have already has this node
        // in hashmap it means their is a cycle
        // (Because you we encountering the
        // node second time).
        if (s.has(h))
            return true;

        // If we are seeing the node for
        // the first time, insert it in hash
        s.add(h);

        h = h.next;
    }

    return false;
}
}

const ll = new LinkedList();
ll.insertFirstNode(32)
ll.insertFirstNode(2)
ll.insertFirstNode(12)
ll.insertAtLastNode(100)
// ll.reverse()
ll.rotate(1)
ll.printLinkedList();


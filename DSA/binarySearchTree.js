class Node {
    constructor(data = null) {
        this.data = data;
        this.right = null;
        this.left = null;
    };
};

class BST {
    constructor() {
        this.root = null;
    };

    insert(data) {
        const newNode = new Node(data);
        if(!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    };

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(!node.left) node.left = newNode;
            else this.insertNode(node.left, newNode);
        };
        if(newNode.data > node.data) {
            if(!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    };

    getRootNode() {
        return this.root;
    };

    inorder(node = this.root) {
        if(node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        };
    };

    preorder(node = this.root) {
        if(node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        };
    };

    postorder(node= this.root) {
        if(node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        };
    };

    findMinValue(node = this.root) {
        if(!node.left) return node.data;
        else return this.findMinValue(node.left);
    };

    findMaxValue(node = this.root) {
        if(!node.right) return node.data;
        else return this.findMaxValue(node.right);
    };

    search(data, node = this.root) {
        if(node) {
            if(data < node.data) return this.search(data, node.left);
            else if(data > node.data) return this.search(data, node.right);
            else if(data = node) return node.data;
        } else {
            return 'data not present in BST';
        }
    };

    levelOrderTraversal(root = this.root) {
        let queue = [];
        queue.push(root);
        while(queue.length > 0) {
            let node = queue.shift();
            if(node.data) console.log(node.data);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    };


};

const bst = new BST();
bst.insert(12);
bst.insert(22);
bst.insert(2);
bst.insert(32);
bst.insert(1);
bst.insert(19);
const root = bst.getRootNode();
// console.log(root);
// bst.inorder(root);
const minValue = bst.findMinValue();
const maxValue = bst.findMaxValue();
const searchResult = bst.search(3);
// console.log(searchResult);
const lot = bst.levelOrderTraversal();
console.log(lot);
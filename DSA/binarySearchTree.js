// class Node {
//     constructor(data = null) {
//         this.data = data;
//         this.right = null;
//         this.left = null;
//     };
// };

// class BST {
//     constructor() {
//         this.root = null;
//     };

//     insert(data) {
//         const newNode = new Node(data);
//         if(!this.root) this.root = newNode;
//         else this.insertNode(this.root, newNode);
//     };

//     insertNode(node, newNode) {
//         if(newNode.data < node.data) {
//             if(!node.left) node.left = newNode;
//             else this.insertNode(node.left, newNode);
//         };
//         if(newNode.data > node.data) {
//             if(!node.right) node.right = newNode;
//             else this.insertNode(node.right, newNode);
//         }
//     };

//     getRootNode() {
//         return this.root;
//     };

//     inorder(node = this.root) {
//         if(node) {
//             this.inorder(node.left);
//             console.log(node.data);
//             this.inorder(node.right);
//         };
//     };

//     preorder(node = this.root) {
//         if(node) {
//             console.log(node.data);
//             this.preorder(node.left);
//             this.preorder(node.right);
//         };
//     };

//     postorder(node= this.root) {
//         if(node) {
//             this.postorder(node.left);
//             this.postorder(node.right);
//             console.log(node.data);
//         };
//     };

//     findMinValue(node = this.root) {
//         if(!node.left) return node.data;
//         else return this.findMinValue(node.left);
//     };

//     findMaxValue(node = this.root) {
//         if(!node.right) return node.data;
//         else return this.findMaxValue(node.right);
//     };

//     search(data, node = this.root) {
//         if(node) {
//             if(data < node.data) return this.search(data, node.left);
//             else if(data > node.data) return this.search(data, node.right);
//             else if(data = node) return node.data;
//         } else {
//             return 'data not present in BST';
//         }
//     };


// };

// const bst = new BST();
// bst.insert(12);
// bst.insert(22);
// bst.insert(2);
// bst.insert(32);
// bst.insert(1);
// bst.insert(19);
// const root = bst.getRootNode();
// // console.log(root);
// // bst.inorder(root);
// const minValue = bst.findMinValue();
// const maxValue = bst.findMaxValue();
// const searchResult = bst.search(3);
// console.log(searchResult);

// var zigzagLevelOrder = function(root) {
//     let outputArr = [];
//     let subArr = [];
//     if(!root) return [[1]];
//     else {
//         for (let i = 0; i < root.length; i ++) {
//             let visit = false;
//             if(i === 0) outputArr.push([root[0]]);
//         if(i % 2 === 0 && i !== 0) {
//             if(root[(2 * i) + 1]) {
//                 subArr.push(root[(2 * i) + 1]);
//                 visit = true;
//             } 
//             if(root[(2 * i) + 2]) {
//                 subArr.push(root[(2 * i) + 2]);
//                 visit = true;
//             }
//         }
//         else {
//             if(root[(2 * i) + 2]) {
//                 subArr.push(root[(2 * i) + 2]);
//                 visit = true;
//             }
//             if(root[(2 * i) + 1]) {
//                 subArr.push(root[(2 * i) + 1]); 
//                 visit = true;
//             }
//         }
//         if(visit) {
//             outputArr.push(subArr);
//         }
//         subArr = [];
//     }
// return outputArr;
// }
// };

var zigzagLevelOrder = function(root) {
    if(root == null) return [];

    let q = [];
    let ans = [];

    let leftToRight = true;
    q.push(root);

    while(q.length != 0){
        let levelNodesList = [];
        let nodesAtCurrlevel = q.length;

        for(let i = nodesAtCurrlevel; i>0; i--){
            let currNode = q.shift();

            if(leftToRight == true){
                levelNodesList.push(currNode.val);
            }else{
                levelNodesList.unshift(currNode.val);
            }

            if(currNode.left != null){
                q.push(currNode.left)
            }

            if(currNode.right != null){
                q.push(currNode.right)
            }
        }

        leftToRight = !leftToRight;
        ans.push(levelNodesList);
    }
    return ans;

};

const root = [3,9,20,null,null,15,7];
const result =  zigzagLevelOrder(root);
console.log(result);
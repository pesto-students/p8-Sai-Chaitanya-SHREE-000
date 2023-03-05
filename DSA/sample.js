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
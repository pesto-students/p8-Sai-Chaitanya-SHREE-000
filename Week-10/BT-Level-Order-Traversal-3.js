const levelOrderTraversal = (root) => {
    let outputArr = [];
    let subArr = [];
    if(!root) return [];
    outputArr.push([root[0]]);
    for(let i = 0; i < root.length; i ++) {
    if(root[(i * 2) + 1]) subArr.push(root[(i * 2) + 1]);
    if(root[(i * 2) + 2]) subArr.push(root[(i * 2) + 2]);
    if(subArr.length > 0) {
    outputArr.push(subArr);
    subArr = [];
    };
};
    return outputArr;
};

// const root = [3,9,20,null,null,15,7];
const root = [1];
const result = levelOrderTraversal(root);
console.log(result);


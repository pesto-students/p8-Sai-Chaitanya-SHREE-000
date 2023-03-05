const findMaxDepth = (root) => {
    let leftCount = 0;
    let rightCount = 0;
    if(!root) return 0;
    for(let i = 0; i < root.length; i ++) {
        if(root[(i * 2) + 1] && root[(i * 2) + 1] % 2 !== 0) leftCount ++;
        if(root[(i * 2) + 2] && root[(i * 2) + 2] % 2 === 0) rightCount ++;
    };
    if(leftCount === rightCount) return leftCount + 1;
    else if(leftCount > rightCount) return leftCount + 1;
    else return rightCount + 1;
}

const root = [3,9,20,null,null,15,7];
// const root = [1, null, 2];
const maxNode = findMaxDepth(root);
console.log(maxNode, 'maxNode');
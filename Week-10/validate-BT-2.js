const validateBT = (root) => {
    if(!root) return true;
    for(let i = 0; i < root.length; i ++) {
        if(root[(i * 2) + 1] && root[(i * 2) + 1] % 2 !== 0) {
            if (root[(i * 2) + 1] > root[(i * 2)]) return false;
        }
        if(root[(i * 2) + 2] && root[(i * 2) + 2] % 2 === 0) {
            if (root[(i * 2) + 2] < root[(i * 2)]) return false;
        }
    }
    return true;
};

// const root = [2, 1, 3];
const root = [5,1,4,null,null,3,6];
const isValidate = validateBT(root);
console.log(isValidate, 'isValidate');

// Helper function to generate all possible combinations of groups of 3 elements
const generateCombinations = (array, k) => {
    if (array.length < k) {
        return [];
    }
    if (array.length === k) {
        return [array];
    }
    if (k === 1) {
        return array.map(element => [element]);
    }
    
    let combinations = [];
    for (let i = 0; i < array.length - k + 1; i++) {
        let first = array[i];
        let rest = array.slice(i + 1);
        let subcombinations = generateCombinations(rest, k - 1);
        subcombinations = subcombinations.map(combination => [first, ...combination]);
        combinations = combinations.concat(subcombinations);
    }
    
    return combinations;
};

// Find the groups of numbers
const numbers = [23, 45, 22, 11, 45, 32];
const groups = generateCombinations(numbers, 3);

// console.log("Groups of numbers:", groups);

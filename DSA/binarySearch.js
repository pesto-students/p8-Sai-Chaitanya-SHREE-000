const A = [23, 4, 232, 74, 90];
const BinarySearch = (A, element) => {
let start = 0;
let end = A.length - 1;
while (end >= start) {
let mid = parseInt((start + end) / 2);
if (A[mid] === element) {
return mid;
} else if (element < A[mid]) {
end = mid;
} else {
start = mid;
}
}
return -1;
}
console.log(BinarySearch(A, 4));

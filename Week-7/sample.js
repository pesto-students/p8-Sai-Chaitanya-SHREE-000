function buildSpiralMatrix(matrix) {
    let spiralMatrix = [];
    let row = 0;
    let col = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix.length - 1;
    while(row <= rowEnd && col <= colEnd) {
        // Top row
        for(let i = col; i <= colEnd; i ++) {
            spiralMatrix.push(matrix[row][i])
        }
        row ++;
        // Col end
        for(let i = row; i <= rowEnd; i ++) {
            spiralMatrix.push(matrix[i][colEnd])
        }
        colEnd --;
        // Bottom row
        for(let i = colEnd; i >= col; i --) {
            spiralMatrix.push(matrix[rowEnd][i])
        }
        rowEnd --;
        // Col start
        for(let i = rowEnd; i >= row; i --) {
            spiralMatrix.push(matrix[i][col])
        }
        col ++;
    }
    console.log(spiralMatrix);
}
const inputMatrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
buildSpiralMatrix(inputMatrix)


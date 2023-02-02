function buildSpiralMatrix(matrix) {
    let spiralMatrix = [];
    let row = 0;
    let col = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix.length - 1;
    while(row <= rowEnd && col <= colEnd) {

        // Top row & middle value (Where col === colEnd && row === rowEnd)
        for(i = col; i <= colEnd; i ++) {
            spiralMatrix.push(matrix[row][i])
        }
        row ++;
        console.log(spiralMatrix, 'top row and middle value');

        // end column
        for(i = row; i <= rowEnd; i ++) {
            spiralMatrix.push(matrix[i][colEnd])
        }
        colEnd --;
        console.log(spiralMatrix, 'end column');

        // end row
        for (let i = colEnd; i >= col; i--) {
            spiralMatrix.push(matrix[rowEnd][i]);                    
        }
        rowEnd--;
        console.log(spiralMatrix, 'end row');

        // First col from end
        for (let i = rowEnd; i >= row; i--) {
            spiralMatrix.push(matrix[i][col]); 
        }
        col++;
        console.log(spiralMatrix, 'first col from end');
    }
    console.log(spiralMatrix);
}
const inputMatrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
buildSpiralMatrix(inputMatrix)


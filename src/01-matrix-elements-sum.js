/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];
  const allArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr[i].push(matrix[j][i]);
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (arr[i][j] === 0) {
        break;
      }
      sum += arr[i][j];
    }
    allArr[i] = sum;
    sum = 0;
  }
  return allArr.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;

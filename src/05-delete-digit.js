/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const digit = n.toString().split('').map((x) => +x);
  for (let i = 0; i < digit.length; i++) {
    let num = '';
    for (let j = 0; j < digit.length; j++) {
      if (j !== i) {
        num += digit[j];
      }
    }
    arr.push(num);
  }
  return Math.max(...arr.map((x) => +x));
}

module.exports = deleteDigit;

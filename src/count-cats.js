const { NotImplementedError } = require('../extensions/index.js');
const {c} = require("sinon/lib/sinon/spy-formatters");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  for (let i of matrix) {
    for (let j of i) {
      if (j === '^^') {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};

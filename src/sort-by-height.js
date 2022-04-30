const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === -1) {
      continue;
    }

    for (let j = 0; j < arr.length - 1; j++) {
      let num = j + 1;
      while (arr[num] === -1) {
        num++;
      }

      if (arr[j] > arr[num]) {
        let temp = arr[j];
        arr[j] = arr[num];
        arr[num] = temp;
      }
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};

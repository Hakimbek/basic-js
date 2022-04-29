const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letter = str[0];
  let count = 0;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      count++;
    } else {
      if (count !== 1) {
        result += count + letter;
      } else {
        result += letter;
      }
      letter = str[i];
      count = 1;
    }

    if (i === str.length - 1) {
      if (count !== 1) {
        result += count + letter;
      } else {
        result += letter;
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine
};

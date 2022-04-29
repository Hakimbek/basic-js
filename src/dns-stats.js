const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let text = ''

  for (let domain of domains) {
    let arr = domain.split('.');
    for (let i = arr.length - 1; i >= 0 ; i--) {
      text += '.' + arr[i];
      if (obj.hasOwnProperty(text)) {
        obj[text] += 1;
      } else {
        obj[text] = 1;
      }
    }
    text = '';
  }

  return obj;
}

module.exports = {
  getDNSStats
};

const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let str1 = {};
    let str2 = {};

    for (let i = 0; i < s1.length; i++) {
        if (str1.hasOwnProperty(s1[i])) {
            str1[s1[i]] += 1;
        } else {
            str1[s1[i]] = 1;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (str2.hasOwnProperty(s2[i])) {
            str2[s2[i]] += 1;
        } else {
            str2[s2[i]] = 1;
        }
    }

    let num = 0;

    for (let str1Key in str1) {
        if (str2.hasOwnProperty(str1Key)) {
            num += Math.min(str1[str1Key], str2[str1Key]);
        }
    }

    return num;
}

module.exports = {
    getCommonCharacterCount
};

const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = '';

    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }

    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        result += str + '';
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (options.addition !== undefined) {
                result += options.addition + '';

                if (j !== options.additionRepeatTimes - 1) {
                    if (options.additionSeparator !== undefined) {
                        result += options.additionSeparator + '';
                    } else {
                        result += '|';
                    }
                }
            }
        }
        if (i !== options.repeatTimes - 1) {
            if (options.separator !== undefined) {
                result += options.separator + '';
            } else {
                result += '+';
            }
        }
    }

    return result;
}

module.exports = {
    repeater
};

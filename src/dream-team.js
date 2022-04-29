const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let nameFirstLetters = [];
        for (let member of members) {
            if (typeof member === "string") {
                nameFirstLetters.push(member.trim().slice(0, 1).toUpperCase())
            }
        }

        nameFirstLetters.sort();
        let result = '';
        for (let nameFirstLetter of nameFirstLetters) {
            result += nameFirstLetter;
        }
        return result;

    } else {
        return false;
    }
}

module.exports = {
    createDreamTeam
};

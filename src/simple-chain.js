const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        if (value === undefined) {
            this.chain.push('( )');
            return this;
        } else {
            this.chain.push('( ' + value + ' )');
            return this;
        }
    },

    removeLink(position) {
        if (isNaN(position) || !Number.isInteger(position) || position <= 0 || position >= this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!")
        }
        this.chain.splice(position - 1, 1)
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        let finalChain = '';
        let result = this.chain;
        this.chain = [];

        for (let i = 0; i < result.length; i++) {
            if (i === 0) {
                finalChain += result[i];
            } else {
                finalChain += '~~' + result[i];
            }
        }

        return finalChain;
    }
};

module.exports = {
    chainMaker
};

const { NotImplementedError } = require('../extensions/index.js');

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
  let str = String(n);
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] > str[i + 1]) {
			result += str[i] + str.slice(i + 2);
			break;
		} else if (str[i] < str[i + 1]) {
			result = str[i + 1] + str.slice(i + 2);
			break;
		} else {
			result += str[i];
		}
	}
	return +result;
}

module.exports = {
  deleteDigit
};

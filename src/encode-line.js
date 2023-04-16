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
	let result = '';
	let arr = [];

	for (let i = 0; i < str.length; i++) {
		if (arr[arr.length - 1] !== str[i]) {
			arr.push(1);
			arr.push(str[i]);
		} else {
			arr[arr.length - 2]++;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			continue;
		}
		result += arr[i];
	}

	return result;
}

module.exports = {
  encodeLine
};

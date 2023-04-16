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
	let result = {};
  for (let i = 0; i < domains.length; i++) {
		let subArr = domains[i].split('.').map(el => '.' + el);
		let maxStr = '';
		for (let j = subArr.length - 1; j >= 0; j--) {
			maxStr += subArr[j];
			if (!result[maxStr]) {
				result[maxStr] = 1;
			} else {
				result[maxStr]++;
			}
		}
	}
	return result;
}

module.exports = {
  getDNSStats
};

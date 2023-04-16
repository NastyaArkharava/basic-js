const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(value) {
		this.typeMachine = (value === false) ? false : true;
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
  encrypt(message, key) {
		if (!message || !key) {
			throw new Error ('Incorrect arguments!');
		}

		message = message.toUpperCase();
		key = key.toUpperCase();

		let result = '';
		let j = 0;

		for (let i = 0; i < message.length; i++) {
			if (!this.alphabet.includes(message[i])) {
				result += message[i];
				continue;
			}
			let messageCode = message.charCodeAt(i);
			let codeShift = key.charCodeAt(j) - 65;
			let kodedMessagekode = ((messageCode + codeShift) <= 90) ? (messageCode + codeShift) : (messageCode + codeShift) - 26;
			result += String.fromCharCode(kodedMessagekode);
			j++;
			if (j >= key.length) {
				j = 0
			}
		}
		if (this.typeMachine) {
			return result;
		} else {
			return result.split('').reverse().join('');
		}
  }
  decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error ('Incorrect arguments!');
		}

		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();

		let result = '';
		let j = 0;

		for (let i = 0; i < encryptedMessage.length; i++) {
			if (!this.alphabet.includes(encryptedMessage[i])) {
				result += encryptedMessage[i];
				continue;
			}
			let messageCode = encryptedMessage.charCodeAt(i);
			let codeShift = key.charCodeAt(j) - 65;
			let kodedMessagekode = ((messageCode - codeShift) >= 65) ? (messageCode - codeShift) : (messageCode - codeShift) + 26;
			result += String.fromCharCode(kodedMessagekode);
			j++;
			if (j >= key.length) {
				j = 0
			}
		}
		if (this.typeMachine) {
			return result;
		} else {
			return result.split('').reverse().join('');
		}
  }
}

module.exports = {
  VigenereCipheringMachine
};

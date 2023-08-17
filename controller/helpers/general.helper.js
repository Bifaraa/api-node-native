/** Packages */
const CryptoJS = require('crypto-js');
const config = require('config');

/** Encryp Password */
exports.EncrypPassword = (password) => {
  const secretKey = config.get('secretkeys').cryptojs;
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    secretKey
  ).toString();
  return encryptedPassword;
};

const CryptoJS = require('crypto-js'); 

const iv = CryptoJS.enc.Utf8.parse('MIXIN');

function Decrypt(word, secret) {
  const key = CryptoJS.enc.Utf8.parse(secret);
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

function Encrypt(word, secret) {
  const key = CryptoJS.enc.Utf8.parse(secret);
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

export default {
  Decrypt,
  Encrypt
}
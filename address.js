const elliptic = require("elliptic");
const ec = new elliptic.eddsa('ed25519');
const crypto = require("crypto");
const sha256 = m => crypto.createHash("sha256").update(m).digest();

module.exports = class Address {
  constructor (address) {
    this.address = address;
  }
  fromPublic (key) {
    this.address = sha256(key);
  }
}

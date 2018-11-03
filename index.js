var generate = require('nanoid/generate');
var alphabet = "23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz";

function picoid(length) {
  return generate(alphabet, length || 17);
}

module.exports = picoid;

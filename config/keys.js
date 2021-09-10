// keys.js
// figure out which set of credentials to return prod/dev

if (process.env.NODE_ENV === 'production') {
  // prod - return prod keys
  module.exports = require('./prod');
} else {
  // dev - return dev keys
  module.exports = require('./dev');
}
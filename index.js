var bubble = require('./bubble')
var insertion = require('./insertion')

var algorithms = {
  bubble,
  insertion
}

module.exports = algorithms

try {
  window.algorithms = algorithms
} catch (e) {}

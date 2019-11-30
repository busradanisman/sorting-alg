var bubble = require('./bubble')
var insertion = require('./insertion')
var selection = require('./selection')

var algorithms = {
  bubble,
  insertion,
  selection
}

module.exports = algorithms

try {
  window.algorithms = algorithms
} catch (e) {}

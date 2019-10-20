(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var bubble = function(array) {
  var x = array.length;
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < x-i-1; j++) { // ...
      if (array[j] > array[j+1]) { // ...
        var a = array[j]
        array[j] = array[j+1]
        array[j+1] = a
      }
    }
  }
 return array;
}

module.exports = bubble

},{}],2:[function(require,module,exports){
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

},{"./bubble":1,"./insertion":3}],3:[function(require,module,exports){
var insertion = function(array){
  for (var i = 1; i < array.length; i++) {
    var key = array[i]
    var j = i-1

    while (j>=0 && array[j]>key) { // ...
      array[j+1] = array[j]
      j -= 1
    }
    array[j+1]=key
  }

  return array
}

module.exports = insertion

},{}]},{},[2]);

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

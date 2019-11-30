function selection(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    let min_idx = i

    for (var j = i+1; j < arr.length; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j

    const temp = arr[min_idx]
    arr[min_idx] = arr[i]
    arr[i] = temp
  }
  return arr
}
module.exports = selection

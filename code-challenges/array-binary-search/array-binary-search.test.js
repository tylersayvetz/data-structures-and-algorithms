let array = [4,8,15,16,23,42, 50];

function binarySearch(arr, target, i = Math.floor(arr.length / 2), iPower = 0, baseI = i) {
  if (arr[i] < target) {
    return binarySearch(arr, target, Math.ceil(i + baseI / Math.pow(2,iPower)), ++iPower, baseI);
  } else if (arr[i] > target) {
    return binarySearch(arr, target, Math.floor(baseI / Math.pow(2, iPower)), ++iPower, baseI);
  } else if (arr[i] === target) {
    return i
  } else {
    return -1;
  }
}

console.log(binarySearch(array, 23));
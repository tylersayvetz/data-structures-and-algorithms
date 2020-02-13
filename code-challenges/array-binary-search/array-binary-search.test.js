let array = [4,8,15,16,23,42, 50];

function binarySearch(arr, target, i = Math.floor(arr.length / 2), iPower = 0, baseI = i) {
  if (i > arr.length || iPower > 500) {
    return -1;
  } else if (arr[i] < target - 1) {
    return binarySearch(arr, target, Math.ceil(i + baseI / Math.pow(2,iPower)), ++iPower, baseI);
  } else if (arr[i] > target) {
    return binarySearch(arr, target, Math.floor(baseI / Math.pow(2, iPower)), ++iPower, baseI);
  } else if (arr[i] === target) {
    return i
  } else {
    return -1;
  }
}

console.log(binarySearch(array, -111));



describe('fucntion should do as expected', () => {
  it('Should respond well to positive inputs', () => {
    expect(binarySearch([4,8,15,16,23,42, 50],23)).toEqual(4);
    expect(binarySearch([4,8,15,16,23,42, 50],50)).toEqual(6);
    expect(binarySearch([4,8,15,16,23,42, 50],4)).toEqual(0);
  })
  it('should respond well to bad input', () => {
    expect(binarySearch([4,8,15,16,23,42, 50],99)).toEqual(-1);
    expect(binarySearch([4,8,15,16,23,42, 50],0)).toEqual(-1);
    expect(binarySearch([4,8,15,16,23,42, 50],-111)).toEqual(-1);
    expect(binarySearch([4,8,15,16,23,42, 50],'a')).toEqual(-1); 

  })
})
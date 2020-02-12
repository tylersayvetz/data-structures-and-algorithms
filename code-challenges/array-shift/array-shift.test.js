
function insertShiftArray(arr, rabbit) {
  //make a new array one longer than the original..
  let newArr = new Array(arr.length + 1);

  //determine the insert spot...
  let insertSpot = Math.floor(arr.length / 2);

  //build up new array, check at each insert if we are at the insert spot, if we are below the insert spot, or if we are above it.
  for (let i = 0; i < newArr.length; i++) {
    if (i === insertSpot) {
      newArr[i] = rabbit;
    } else if (i < insertSpot) {
      newArr[i] = arr[i];
    } else if (i > insertSpot) {
      newArr[i] = arr[i - 1];
    }
  }

  return newArr;
}


function removeMiddle(arr) {
  if (arr.length > 0) {
    let middle = Math.floor(arr.length / 2);
    for (let i = middle; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
  }
  return arr;
}


console.log(removeMiddle([]));


describe('Insert Shift Array', () => {
  it('Function should put rabbit argument into center of given array', () => {
    expect(insertShiftArray([1, 2, 3, 4, 5, 6], 'a')).toEqual([1, 2, 3, 'a', 4, 5, 6]);
    expect(insertShiftArray([1, 2, 3, 4, 5, 6], 'asdf')).toEqual([1, 2, 3, 'asdf', 4, 5, 6]);
    expect(insertShiftArray([1, 2, 3, 4, 5, 6], ['a', 'b', 'c'])).toEqual([1, 2, 3, ['a', 'b', 'c'], 4, 5, 6]);
    expect(insertShiftArray([], 'a')).toEqual(['a']);
  })
})
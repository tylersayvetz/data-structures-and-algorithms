

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i]

    while(j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j--
    }

    array[j + 1] = temp;
  }
  return array
}



const myArray = [20,'a',12,8,5,-2];


insertionSort(myArray)
describe('insertionSort()', () => {
  it ('sorts an array of nums', () => {
    expect(insertionSort(myArray)).toEqual([-2,5,8,12,18,20])
  });
  it ('doesnt break when all the numbers are the same', () => {
    expect(insertionSort([1,1,1,1,1,1,1])).toEqual([1,1,1,1,1,1,1])
  });
});
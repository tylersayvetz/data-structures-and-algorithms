
function quickSort(array, leftLimit = 0, rightLimit = array.length - 1) {

  // only do any of this if the array length is greater than 1 (this is the base case).
  if (leftLimit >= rightLimit) return array;

  //first partition the array, returning the pivotIndex (the index of the pivot after the rough sort)
  const pivotIndex = partition(array, leftLimit, rightLimit);

  //then make a recursive call to the left
  quickSort(array, leftLimit, pivotIndex - 1)

  //then make a recursive call to the right
  quickSort(array, pivotIndex, rightLimit)

  //return the array (roughly sorted in-place)
  return array;

}

function partition(array, leftLimit, rightLimit) {
  //declare the pivot to be the rightLimit
  let pivotValue = array[rightLimit];

  //initiate two counters. These will track the sorting?
  let pIndex = leftLimit;
  //the second counter is i.. we will iterate through the array section on i
  for (let i = leftLimit; i < rightLimit; i++) {

    //!if the value at i is less than the pivot, swap the value at pIndex and the value at i.
    // [8,4,13,41,13,15]   pivot is 15. 
    //so we would swap 8 with itself on the first iteration and increment both pindex and i.
    //on the third iteration we 23 is not less than 15, so only i is incremented. pindex wont be incremented until the 5th iteration.
    //on the fifth iteration 13 is less than 15, so 13 and 23 switch places. Both pindex and i are incremented. 
    // so now: [8,4,13,41,23,15]
    if (array[i] <= pivotValue) {
      if (i !== pIndex) swap(array, i, pIndex);
      pIndex++;
    }
  }
  //after the `for` statement, we get to the *final move*
  //the array should look like : [8,4,13,15,41,23]. Note how the pivot, 15, has lesser numbers to the left, and greater numbers to the right. This is a rough sort!
  swap(array, pIndex, rightLimit)
  //return the location of the pivot.
  return pIndex;
}

//swap the values of two indexes.
function swap(array, a, b) {
  let temp = array[b];
  array[b] = array[a]
  array[a] = temp
}

const array = [8, 4, 23, 41, 13, 15, 67, 43, 11, 1, -8];
quickSort(array);
console.log(array)



describe('quickSort', () => {
  it ('sorts an array of numbas', () => {
    const array = [8, 4, 23, 41, 13, 15, 67, 43, 11, 1, -8];
    quickSort(array);
    expect(array).toEqual([ -8, 1, 4, 8, 11, 13, 15, 23, 41, 43, 67 ])
  });

  it ('sorts an array where there are duplicate numbers', () => {
    const array = [8, 4, 23, 23, 13, 15, 67, 43, 11, 1, -8];
    quickSort(array);
    expect(array).toEqual([ -8, 1, 4, 8, 11, 13, 15, 23, 23, 43, 67 ]) 
  })
});

describe('swap', () => {
  it ('swaps two elements in an array and modifies the array.', () => {
    const array = [1,2,3]
    swap(array, 1,2)
    expect(array).toEqual([1,3,2])
  });
});

describe('partition', () => {
  it ('performs a rough sort on an array, modifying it', () => {
    const array = [1,3,7,2,5];
    partition(array, 0, 4)
    expect(array).toEqual([1,3,2,5,7])
  });
  it ('returns the pivot index of a whole array', () => {
    const array = [1,3,7,2,5];
    expect(partition(array, 0, 4)).toEqual(3)
  })
  it ('returns the pivot of a subsection of an array.', () => {
    const array = [1,3,7,2,5];
    expect(partition(array, 3, 4)).toEqual(4)

  });
});
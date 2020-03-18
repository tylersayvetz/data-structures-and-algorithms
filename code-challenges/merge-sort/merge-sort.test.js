

function mergeSort(arr) {
  //if the length of the array is greater than one,
  //perform a split
  const n = arr.length;

  if (n > 1) {
    //declare a middle variable and left and right subarrays.
    const middle = Math.floor(n/2)
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle, n)

    //when we make a recursive call to the left and right arrays, we know that the lengths of these sub arrays will halve with every recursive call. This will stop when the subarrays are only single elements. 
    mergeSort(leftArr);
    mergeSort(rightArr);

    //when the mergeSort() stack ha grown to its maximum height (all arrays are single elements), 
    //we will attempt to merge them
    //to do this: we pass in the parent array and the two things we are merging.
    merge(arr, leftArr, rightArr);
  }
  return arr
}

//this function is iterative, and will use some cool logic to merge the tiny sub-arrays into their parent.
function merge(parent, left, right) {
  const leftEnd = left.length;
  const rightEnd = right.length;

  let rightIndex = 0, leftIndex = 0, parentIndex = 0;

  //as long as both indexes are pointing to valid spots on the subarrays..
  //eventually one of the pointers (left or right) will run off the end and violate the while() condition.
  while (leftIndex < leftEnd && rightIndex < rightEnd) {
    //if the element on the left <= the element on the right, put the left element into the mainArray at mainIndex and increase the appropriate index counters. 
    if (left[leftIndex] <= right[rightIndex]) {
      parent[parentIndex] = left[leftIndex];
      leftIndex++;      
    }
    //else the left element must be greater than the right element. so do the opposite. Paste the right element on the parent array at the mainIndex and increment the appropriate indexes.
    else {
      parent[parentIndex] = right[rightIndex]
      rightIndex++;
    }

    //finally, make sure we increment the pointer for the parent array.
    parentIndex++;
  }

  //once we break out of the while loop, there could be remaining numbers not inserted onto the parent. We should deal with this case. 
  //If it was the Right Child that ran out of elements first,
  //add the remaining elements from the Left Child.
  if (rightIndex === rightEnd) {
    while (leftIndex < leftEnd) {
      parent[parentIndex] = left[leftIndex];
      parentIndex++
      leftIndex++
    }
  }

  //conversely, if it was the Left Child that ran out of elements first, do the opposite.
  else  {
    while (rightIndex < rightEnd) {
      parent[parentIndex] = right[rightIndex];
      parentIndex++
      rightIndex++
    }
  }
}

describe('mergeSort', () => {
  it ('sorts arrays of numbers', () => {
    expect(mergeSort([8,1,1,5,12,61,8,98,13,64,34,6,7,56,0])).toEqual([ 0, 1, 1, 5, 6, 7, 8, 8, 12, 13, 34, 56, 61, 64, 98 ])
    expect(mergeSort([-9,-1,1,7,9,10])).toEqual([-9,-1,1,7,9,10])
  });

  it ('doesnt break when there are duplicates', () => {
    expect(mergeSort([2,2,2,4,5,1])).toBeTruthy();
  })

});

[8,1,2,5,12,61,8,98,13,64,34,6,7,56,0]

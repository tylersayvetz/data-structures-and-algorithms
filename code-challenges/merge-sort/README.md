# Merge Sort

Implementing this one was pure fun. 

## Inputs and outputs.
Input: an array

Output: void. (The array will be modified in place.)

## Algorithm explanation

This Sort is made up of two main parts. Everything happens within a recursive environment, so we will put on our Inception hats and dive in.

## First part: Slicing.

#### example input: `[8,1,2,5]`
In the first part, we will slice the input in half and then recursively call the slicing method on the children. We do this only if the length of the array is greater than 1.

```javascript
function mergeSort(arr) {
  //if the length of the array is greater than one,
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
}
```

This will create :

`[8,1]` and then `[8] ` and `[1]`

and


`[2, 5]` and then `[2]` and `[5]`

( it happens in this order beacuse it is a DFS on a binary tree with a PreOrder ordering. )

When we get to this step, the lengths of these arrays are not greater than 1, so the function skips the whole if() statement and returns void. At that point we return to the previous stack frame. Keep in mind which instances of arr, leftArr, and rightArr will be in scope in each stack frame:
```javascript
mergeSort(leftArr); // passing in [8] here returns void immediately
mergeSort(rightArr); //passing in [1] here returns void as well.

merge(arr, leftArr, rightArr) //so we reach merge( [8,1], [8], [1] )
etc etc..on down the trail
```

When both left and right arrays have length 1, we will get to our `merge()` call. Merge also returns void, but since we will be modifying `arr` in-place, it won't matter. At this point, we can consider the main input array to have been broken into arrays that have only one element.

Important note: We are at the top of our call stack at this point. Each stack frame below us has progressively larger child arrays in it. The bottom frame has the actual input array as the parent. 

## Second part: Merging

When we reach the call to the `merge()` function we are at the top of the call stack and have the smallest arrays to work with. Great news. 

merge() takes in three things: 

```javascript

function merge(parent, left, right) {

```
`parent` is the thing we will be merging into. This will be modified in place. It is also the **child** of the next stack frame down! You can see how this is going to be a chain reaction.

`left` is the left child, `right` is the right child. 

Here is the function: 

```javascript
function merge(parent, left, right) {
  const leftEnd = left.length;
  const rightEnd = right.length;
  let rightIndex = 0, leftIndex = 0, parentIndex = 0;

  while (leftIndex < leftEnd && rightIndex < rightEnd) {

    //this is where the actual sort occurs
    if (left[leftIndex] <= right[rightIndex]) {
      parent[parentIndex] = left[leftIndex];
      leftIndex++;      
    } else {
      parent[parentIndex] = right[rightIndex]
      rightIndex++;
    }

    parentIndex++;
  }

  //phase 2: the cleanup
  if (rightIndex === rightEnd) {
    while (leftIndex < leftEnd) {
      parent[parentIndex] = left[leftIndex];
      parentIndex++
      leftIndex++
    }
  }

  else  {
    while (rightIndex < rightEnd) {
      parent[parentIndex] = right[rightIndex];
      parentIndex++
      rightIndex++
    }
  }

```

You can see we also defind 5 more variables for our use. This is in an O(1) space commitment. 
Three of these variables are for keeping track of the which element we are referencing on each of the three arrays. (parent, left and right).

We need to know that we are only going to merge items into the parent when they are at valid indexes. For that reason, we make `leftIndex < leftEnd && rightIndex < rightEnd` the condition of our main while() loop.

Inside that while() loop:

- We simply compare the first elements of the `left` and `right` arrays. 
- We merge the smaller of the two into the `parent` at index `parentIndex`.
- We increment the array's counter from which element was sourced.
- We increment the `parentIndex`
- Repeat

When we run off the end of one of the arrays, the while() loop I mentioned earlier will terminate. We will then run into `phase 2: the cleanup` 

These two statements will merge the remaining elements from the child array that still has elements left to be merged. 

In our test case :

`[8,1]` and then `[8] ` and `[1]`

- The `1` will be placed into the first index position, overwriting the `8` -->  `[1,1]`
- The `rightIndex` will be incremented to `1`
- That is a violation of the while() loop condition, so we enter `phase 2`.
- Since it is the `rightIndex` that "ran off the end", we backfill the `left` array, incrementing it's index counter until it matches the `leftEnd`.
- `[1,8]`

## Third part: devolving the callstack

Now parent looks like `[1,8]`. Big deal, right?  Actually yes! 

- 1. Since we were modifying things in place, when the `merge()` function returns and we enter the previous stack frame, `arr` is modified. 
- 2. From there, the `mergeSort()` function returns (the call to `merge` is the last line in the function)
- 3. Now we are in stack frame #1 where `arr` === `[8,1,2,5]` and `leftArr` === `[8,1]`, right? 

    **nope**

- 3. In fact, since all the references to the subarrays were passed by reference, when we modified the tiny subarrays at the granular level, the reference pointed all the way back to the input array. What we actually have at this point is

    - `arr` === `[8,1,2,5]`
    - `leftArr` === `[1,8]`

```javascript
function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const middle = Math.floor(n/2)
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle, n)

    mergeSort(leftArr); //3. we return to this position but in the previous frame.
    mergeSort(rightArr);  
  function merge(arr, leftArr, rightArr) // 1. returns void, but arr, leftArr, and rightArr are modified.

  }

} //2. also returns void, but since arr was modified, so then is the argument in the previous stack frame
```

### continuing

- `mergeSort(rightArr)` will now return void (but rightArr is modified to be `[2,5]`)
- Then `merge()` will execute with the two child arrays that are each (2) elements long. 
- The same mechanics will apply and we will have a sorted array. Yay us.






















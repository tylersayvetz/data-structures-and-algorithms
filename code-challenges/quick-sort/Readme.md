
# Quick Sort


## Big picture
  Ok what is the big picture here? 

  **1.** We need to do a "rough sort", which we will call  `partition(array, leftLimit, rightLimit)`. This just puts larger numbers to the right and smaller ones to the left. Lets look a tiny bit deeper.

  Initially the left and right limits are `0`, and `length - 1`

    Given `[8,4,23,41,16,15]`

  The result of this function is: 
  - Declare a `pivot` to be the last element in the array
  - Iterate through the array and put all numbers **greater** that the pivot to the right 
  - and all numbers **less** than the pivot to the left.
  - This is an O(n) operation.
 
 We will find out exactly *how* this is done later in the document. 

    Now `[8,4,*15*,41,16,23]`

Note that the pivot is noted with *'s. 


  **2.** We need to recursively call that rough sort `partition` on the two partitions of the array. 15 is the `pivot` so we don't include it. Remember that we are passing the full input array into each of these functions, we are not creating any additional data structures. 

    So `[8,4]`    and also   `[41,16,23]`

  **3.** Eventually things will be split into arrays with one element. The key is that a rough sort (`partition`) is only a rough sort if you are working on an array with more than 2 elements in it. If youre working on an array with only 2 elements, a **rough** sort *is* a perfect sort! Boo yah!

  ## How does it work

  Now that we are "later in the document" we will dive deeper into the `partition` function, which is where most of the magic happens.

  The partition function works by utilizing three "pointers". In reality these are just number variables. O(1) space.

  - `i` refers to the point of iteration on the array section. (yes , we will use a for() loop)
  - `pivotValue`. Although not a "pointer", `pivotValue` is the last element in the array section and we will use it in our logic. So it is included here.
  - `pIndex` also starts at the beginning of the array section. On a given iteration, it will only be incremented if `i` is less than the pivot

  The main course of the `partition` function is a `for()` loop that iterates through the entirety of the array section. We can see it here: 

 ```javascript
  function partition(array, leftLimit, rightLimit) {

    let pivotValue = array[rightLimit];
    let pIndex = leftLimit;

    for (let i = leftLimit; i < rightLimit; i++) {
      if (array[i] <= pivotValue) {
        swap(array, i, pIndex);
        pIndex++;
      }
    }
  ...
 ```
- `leftLimit` and `rightLimit` define the bounds of the "array section". I intentionally avoid the term "sub array", because we are not making a new data structure.

#### Lets walk through an example of this rough-sorting function. We will use the full array, so will be representing the first call to `partition()`, before any recursion.

    Given `[8,4,23,41,13,15]` 
    We want `[8,4,13,15,23,41]`

1. right away, `pivotValue` is 15;
2. `pIndex` is 0

- for each index of the array...

1. if 8 is less than 15 .. increment `i` and `pIndex`, swap 8 with 8. 
2. if 4 is less than 15 .. increment `i` and `pIndex`, swap 4 with 4. 
3. if 23 is less than 15 .. nope .. increment `i` only.
4. if 41 is less than 15 .. nope .. increment `i` only.

Now we have a pointer pointing at 23 and one at 13.. watch closely here..

5. if 13 is less than 15 .. yes! .. increment `i` and `pIndex`, swap **13 and 23** (`pIndex` got "stuck" on 23)
6. now `i` will no longer be less than `rightLimit` so the for() loop terminates.

  now we have: `[8,4,13,41,23,15]`

close.. 

### The **final move** 
 
  Now Ill show the entire function. Ive commented out the code we already visited: 

```javascript
  // function partition(array, leftLimit, rightLimit) {
  // let pIndex = leftLimit;

  // for (let i = leftLimit; i < rightLimit; i++) {
  //   if (array[i] <= pivotValue) {
  //     swap(array, i, pIndex);
  //     pIndex++;
  //   }
  // }
  swap(array, pIndex, rightLimit)

  return pIndex;
}
```

All that is left to do is swap the pivot value with the `pIndex` value and return the `pIndex`.

    Now we have what we want: `[8,4,13,15,23,41]`


#### Parting note.

Since the call to the paritition function is inside a recursively called function (`quickSort`), the "array section" I am referring to will relate to the position on the call stack. The farther up the call stack, the smaller the section of the array we will be examining. At the top of the call stack all of the array sections will only be one element, and the `if()` condition at the top of the function will initiate the "base case" and stop the recursion.





  


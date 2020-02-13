Documentation: Your README.md
# Challenge Summary
using no built-in methods, perofrm a binary search on a sorted array. Return the index of the array that matches the element to be found.


## Approach & Efficiency
I chose a recursive approach. Since the problem can be thought of as a simple task that has to be repeated over and over again, I though this was appropriate. 
My search will only work on arrays that satisfy     `MaxCallStackSize < log2(array.length)`. This accomodates a huge range of lengths but is still limited. The array is halfed with every iteration (and thus another function call), that is, "taken down by a power of two". Therefor the array is, at max, 2^#iterations long.

## Solution

At each call to the function, check if the target is the inspected element, if the target is greater, and if the target is lesser. Depending on which case is true, return a call to the function, passing in the parameters to modify the 'jump' distance of the 'inspector'. Reapeat.

![NAME] (some url)
# Challenge Summary
Without using any built-in functionality, write a function that inserts a variable into the middle of an array, returns a new array.

Stretch: 

Write another function, which removes the middle element from an array. 



## Approach and Solution

My approach was to use a 'for' loop, combined with a new array of pre-determined length, and a 'middle' variable calculated from the length of the input.

My solution was to use a 'for' loop to iterate through a new array (one longer than the input array). Inside the loop, I would enter an if/else block, which would determine which part of the array the controller was in (beginning, at the middle, or tail) by comparing the counter ( i ) to the half-way index (arr.legnth / 2) . Based on the position, the code would insert the appropriate element.



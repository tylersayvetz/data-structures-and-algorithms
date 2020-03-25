# Tree - intersection

Collaborated with Andrew Kyllo on this challenge


    Given two binary trees, return an array of all of the values that appear in both trees. 

In essence, return all the collisions. 

This is a perfect opportunity to use a MAP!

## Map

A map was a good choice beacuse of the O(1) lookup feature. There would be a lot of lookups in this challenege. 

#### We chose to use two maps! 

One map would contain all of the keys, the second map would contain only the collided keys. 

We did this by a simle `if/else` statement

```
if( first map has the value) 
  add the value to the second map
else ( add the value to the second map)

```
This is done inside the guts of a pre-order DFS traversal of each binary tree. 

The second map will now contain all of the collisions. 



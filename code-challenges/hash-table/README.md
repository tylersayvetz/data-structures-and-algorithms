# Hash Table Implementation

A hash table is literally an array of linked lists. The storage location of some key/value pair is decided by 'hashing' the key with some 'hash' function. This function is mathematically guaranteed to produce the same index number for the same input key, so it is useful for retrieving values from the Hash Table as well. If two different words 'hash' to the same value (a collision happens), the value is put on the end of the linked list at that location .

## visualize.. 
This is how we visualize our HT.

    [ 
      {key, value} --> {key, value} --> null,
      {key, value} --> null 
      null,
      null,
      {key, value} --> {key, value} --> {key, value} --> null 
    ]

This HT would not be very effective. Because of it's short length, there would be many collisions, and thus, the retrieval of data would not be very performant. 

    [
      null,
      null,
      null,
       x1000 .. etc
    ]

This table would be much more performant. As we can see, there are unlikely to be two unique keys that hash to the same value beacuse there are 1003 'buckets' or index options. 

## Adding values. 
To add values, the key/value to be added is 'hashed'. Hashing means turning something into a number. This is done algorithmically. A simple hashing function might look like. 

```
  function hash(key) {
   split key into its individual chars. 
   multiply the ASCII codes of the chars together.
   Multiply by some large prime number
   divide by the length of the hash table

   return the number
  }
```

This function changes `'a string'` into some number... let's say `8'.. 

Now the hash table knows exactly where to put that key/value. 

This function is not very good, however, beacuse two words that have the same characters, but in a different order, like `cat` and `act` will hash to to the same value. The position of the chars should also be accounted for in the hash. Any anagram of a word will hash to the same value. 

- Ha! Perhaps this function could be useful for detecting anagrams!

## Retrieving Values
Retrieving is the same but in reverse. You know the key you are trying to look up, so you pass it to the hash function, which tells you which index the key/value is at. Then you can retrieve the value. 


- What if there is a collision at that index and the retrieval function finds more than one key/value? 

In this case we iterate through the linked list, as usual, looking for the key that matches. While this part is O(n), the previous part was O(1)! 

    We can see now that by changing the size of the hash table we can alter the space/time tradeoff. A smaller hash table will take up less space but be less performant. 
    
- The perfect size depends on the application. 
- Better hashing algorithms can also help you, and should be custom made to work well with the expected data. 
- A perfect hashing algorithm would distribute key/values evenly across the hash table, leaving minimal unused space and causing minimal collisions. 
- The `load factor` is a measure of how full a hash-table is. 

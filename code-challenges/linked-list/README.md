# Singly Linked List
<!-- Short summary or background information -->
So ya. Singly linked lists are fun to work with! 
Background: A linked list is a type of data structure. Im not sure what it would be good for yet, but they seem to be fairly flexible. Large tradeoff with computational expense though. Much to be learned! 

## Challenge
<!-- Description of the challenge -->
The challenge was to implement our hello world of linked lists. Create a node class and a List class and be able to instantiate a linked list. Make prototype functionality for inserting at the beginning, appending to the end, and finding (returns boolean). 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

All of the functions in the Linked list class are O(n) time-complexity, with one exeption. 'Insert' is O(1) expensive. SO that's cool. If you have a log of nodes to stick on to the end of a linked list, it is much more efficient to reverse your list, INSERT (instead of append) all of the nodes, and then reverse it back. 

See my implementation of reverse. 


## API
<!-- Description of each method publicly available to your Linked List -->

Testing included 6 tests, which effectively test the entire functionality of the two classes. 

`LinkedList.reverse()`

reverses the Linked List: O(n)
- input

none

- output

none

`LinkedList.find()`

determine weather or not an element exists on the list: \<= O(n)
- input

value to be searched for in the list.

- output

boolean

`LinkedList.append()`

adds a new node to the end of the list: O(n)
- input

primitive value to be appended.

- output

none

`LinkedList.insert()`

adds a new value to the beginning of the list: O(1)
- input

primitive to be added to the front of the list.

- output

none


`LinkedList.toString()`

prints the list via console.log().
- input

none

- output

{headVal}->{val1}-> ... etc.
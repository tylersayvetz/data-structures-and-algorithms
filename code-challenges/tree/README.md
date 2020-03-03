# Trees && FizzBuzzTrees
<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
Create a binary tree class that has various methods for traversal, adding, and searching for nodes. 
Create a Node class to support the Tree class. 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used recursive approaches to the traversal algorithms, and an iterative approach to the search alg.

I chose 'iterative' due to the ability to break out of a loop and finish function execution when the target was found. 

### Big O

For time, all methods are at worst case O(n) time. None are N**2. At best case (well balanced tree), the time complexity for a search (`contains()`) is very small. 

For space, the traversal methods all have O(n) complexity. This is because I build an output array that is exaclty as long as N nodes. 


## FizzBuzz files

### API 
`fizzify ` takes a numerical value and returns 'fizz' 'buzz' or 'Fizzbuzz', depending on if it dvisible by 3, 5, and both3 && 5, respectively. 

`fizzBuzzTree` takes in a binary tree root and returns a copy of the tree, with fizz and buzz replaced in the proper spots, according to fizzify. 



## API
<!-- Description of each method publicly available in each of your trees -->

- `preOrder(current: Node = this.root, output = []): array`

Prints out the tree as a string in Pre ORder. Returns an array.

- `inOrder(current: Node = this.root, output = []): array  `

Same as above but In Order

- `postOrder(current: Node = this.root, output = []): array `

Same as above but in Post Order

- `add(value: number): void`

adds node in proper position on tree.

- `includes(value: number): boolean`

returns boolean based on the presence of the value you pass.


![](assets/tree.jpeg)
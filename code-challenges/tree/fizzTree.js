// const { makeArrayOfNums } = require('./tree')

class Node {
  constructor(val = null, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value, current = this.root) {
    //if tree is empty add new root.
    //todo: refactor to be iterative instead of recursive, so it's not guaranteed to be O(n) time, instead just worst case O(n) time.
    if (!this.root) return this.root = new Node(value);

    //logic to insert the node /reject if equal.
    if (value === current.value) return null
    if (!current.left && value < current.value) return current.left = new Node(value);
    if (!current.right && value > current.value) return current.right = new Node(value);

    //if we didnt add the node at this point, traverse.
    if (value < current.value) {
      this.add(value, current.left)
    }
    if (value > current.value) {
      this.add(value, current.right)
    }

  }

  inOrder(current = this.root, output = []) {
    if (!current) return output;
    if (current.left) this.inOrder(current.left, output)
    output.unshift(current.value)
    if (current.right) this.inOrder(current.right, output)
    return output
  }

}

//outside function that takes in a tree and returns a duplicate tree
function fizzBuzzTree(tree) {
  if (!tree.root) { return new BinaryTree(); }
  
  const newRootValue = fizzify(tree.root.value)
  const newTree = new BinaryTree(new Node(newRootValue))
  fizzBuzzTree_helper(tree.root, newTree.root)

  return newTree;
}

function fizzBuzzTree_helper(currA, currB) {
  if (!currA) return
  currB.value = fizzify(currA.value);
  if (currA.left) {
    currB.left = new Node();
    fizzBuzzTree_helper(currA.left, currB.left)
  }
  if (currA.right) {
    currB.right = new Node();
    fizzBuzzTree_helper(currA.right, currB.right)
  }
}

function betterFizzBuzzTree(node) {
  if (node === null) { return null }
  else {
    const newNode = new Node(fizzify(node.value))
    newNode.left = betterFizzBuzzTree(node.left)
    console.log(newNode.value);
    newNode.right = betterFizzBuzzTree(node.right)
    return newNode;
  }
}

function fizzify(value) {
  return !(value % 3) && !(value % 5) ? 'Fizzbuzz' :
    !(value % 3) ? 'Fizz' :
      !(value % 5) ? 'Buzz' :
        value.toString();
}


////////////////////
function makeArrayOfNums(min, max, n) {
  const returnArr = [];
  while (n > 0) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    returnArr.push(random);
    n--;
  }
  return returnArr;
}






const myTree = new BinaryTree();
const data = makeArrayOfNums(-20, 20, 8)
for (let i = 0; i < data.length; i++) {
  myTree.add(data[i])
}

//log out my tree
console.log(myTree.inOrder());

//make new fizz tree, log it out.
const myNewTree = fizzBuzzTree(myTree);
console.log(myNewTree.inOrder());


module.exports = {
  fizzify,
  fizzBuzzTree,
  BinaryTree,
  Node
}
class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(node = null) {
    this.root = node;
  }

}

function breadthFirst(tree) {
  if (!tree.root) return null
  let current;
  let queue = [];
  let output = [];

  queue.push(tree.root)
  while (queue.length) {
    current = queue.shift()
    output.push(current.value)
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return output
}

const myTree = new Tree(new Node(1, new Node(2, new Node(3, new Node(4), new Node(5)))));

console.log(breadthFirst(myTree));

module.exports = {
  Node, Tree, breadthFirst
}
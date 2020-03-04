class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  findMax(node = this.root, max = -(Infinity)) {
    if (node === null) return null
    if (node.value > max) max = node.value;
    if (node.left) max = this.findMax(node.left, max)
    if (node.right) max = this.findMax(node.right, max)
    return max;
  }
}


const myTree = new Tree(new Node(1, new Node(20, new Node(21, new Node(4), new Node(5)))));

console.log(myTree.findMax())

module.exports = {
  Tree, Node
}
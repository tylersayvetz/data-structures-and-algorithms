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

  preOrder(current = this.root, output = []) {
    if (!current) return output;
    output.push(current.value);
    if (current.left) {
      this.preOrder(current.left, output);
    }
    if (current.right) {
      this.preOrder(current.right, output);
    }
    return output;

  }

  inOrder(current = this.root, output = []) {
    if (!current) return output;
    if (current.left) this.inOrder(current.left, output)
    output.push(current.value)
    if (current.right) this.inOrder(current.right, output)
    return output


  }

  postOrder(current = this.root, output = []) {
    if (!current) return output;
    if (current.left) this.postOrder(current.left, output)
    if (current.right) this.postOrder(current.right, output)
    output.push(current.value)
    return output;
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

  contains(target) {
    if (typeof target !== 'number') return false;
    //were gonna use a iterative approach so that we can break as soon as we find the target.
    let found = false;
    let current = this.root;

    while (!found) {
      if (target < current.value) {
        if (current.left) {
          current = current.left;
        } else break;
      }
      else if (target > current.value) {
        if (current.right) {
          current = current.right;
        } else break;
      } else {
        found = true;
      }
    }
    return found;
  }
}
// const myTree = new BinaryTree(new Node(10, new Node(9), new Node(20, new Node(15, new Node(12), new Node(17)))));
// const myTree = new BinaryTree();

// myTree.add(1)
// myTree.add(8)
// myTree.add(30);
// myTree.add(333);
// myTree.add(-4);

// console.log(myTree.preOrder());
// console.log(myTree.inOrder());
// console.log(myTree.postOrder());

// console.log(myTree.contains(30))

module.exports = {
  BinaryTree, Node
}
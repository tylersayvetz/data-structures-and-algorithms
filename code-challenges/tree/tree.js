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
    output.unshift(current.value)
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


  printTree() {
    const queue = [this.root];
    let current;
    let i = 0;
    let str = ''
    while (queue.length && queue.length < 100) {
      i++
      if (Math.log2(i) % 1 === 0) {
        console.log(str);
        str = '';
      }
      current = queue.shift()
      if (current === null) {
        str += ' '
        queue.push(null, null)
      }

      else {
        str += ` ${current.value} `
        // if (!(current.left === null && current.right === null)) {
        current.left ? queue.push(current.left) : queue.push(null)
        current.right ? queue.push(current.right) : queue.push(null)
        // }
      }
    }
    console.log(str)



  }

  isSorted(sorted = true, current = this.root, output = null) {
    if (!sorted || !current) return false;;
    //1
    if (current.left) sorted = this.isSorted(sorted, current.left, output)
    //2
    if (current.value <= output) {
      sorted = false;
    }
    //3. 
    output = current.value

    //4
    if (current.right) sorted = this.isSorted(sorted, current.right, output)

    //5.
    return false
  }

  fizzBuzz(current = this.root, output = []) {
    if (!current) return output;
    if (current.value % 3 === 0 && current.value % 5 === 0) current.value = 'fizzbuzz'
    else if (current.value % 3 === 0) current.value = 'fizz'
    else if (current.value % 5 === 0) current.value = 'buzz'
    if (current.left) this.fizzBuzz(current.left, output)
    output.unshift(current.value)
    if (current.right) this.fizzBuzz(current.right, output)
    return output

  }
}

function treeScaffold(arr) {
  let depth = 5;
  for (let row = 0; row < depth; row++) {
    let str = '';
    for (let j = 0; j < 2 ** row; j++) {
      for (let i = 0; i < Math.floor((2 ** depth / 2 ** row)); i++) {
        str += '-';
      }
      str += 'e'
    }
    console.log(str)
  }
}


function makeArrayOfNums(min, max, n) {
  const returnArr = [];
  while (n > 0) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    returnArr.push(random);
    n--;
  }
  return returnArr;
}


function treeInOrder(tree) {
  const array = tree.inOrder();
  array.reduce((acc, el, i) => {
    if (!acc) return acc;
    if (el > array[i + 1]) { acc = false }
    return acc
  }, true)
}


/////////////

// const myTree = new BinaryTree(new Node(10, new Node(500, null, new Node(9.9)), new Node(20, new Node(15, new Node(12), new Node(17)))));
// const myTree = new BinaryTree();


// const data = makeArrayOfNums(0, 300, 10)
// const data = [5, 3, 10, 6, 12, 8, 20]
// data.forEach(num => myTree.add(num));
// myTree.root.left.value = 500;

// console.log(myTree.preOrder());
// console.log(myTree.inOrder());
// console.log(myTree.postOrder());
// console.log(myTree.fizzBuzz())
// myTree.printTree();



// console.log(myTree.isSorted());

// console.log(myTree.contains(15))

// treeScaffold([]);

module.exports = {
  BinaryTree, Node, makeArrayOfNums
}













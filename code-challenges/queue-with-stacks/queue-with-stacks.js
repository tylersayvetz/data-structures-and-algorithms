class Stack {
  constructor() {
    this.storage = [];
  }
  push(val) {
    return this.storage.unshift(val);
  }
  pop() {
    return this.storage.shift();
  }
  peek() {
    return this.storage[0]
  }
}

class PseudoQueue {
  constructor(stackA = new Stack()) {
    this.stackA = stackA;
    this.stackB = new Stack();
    this.stackB.storage = this.stackA.storage.map(el => el).reverse();
  }

  enqueue(val) {
    //push the new thing on the front of the reversed list (ie. the back of the DMV line);
    this.stackB.push(val);

    //set the forward list to be the reverse of the backward list.
    this.stackA.storage = this.stackB.storage.map(el => el).reverse();

    //adds a value to the back of the line.
    //increments the length of the queue
  }

  dequeue() {
    //take the first thing off of the forward list (ie. first person in line at the DMV, come to the window)
    const result = this.stackA.pop();

    //set the reverse list to be the reverse of the forward list.
    this.stackB.storage = this.stackA.storage.map(el => el).reverse();
    return result;
    //returns the value from the front of the line
    //decrements the length of the queue
  }
}

module.exports = { Stack, PseudoQueue }
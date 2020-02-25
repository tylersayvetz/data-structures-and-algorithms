class Node {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(val) {
    const newNode = new Node(val, this.top);
    this.top = newNode;
  }

  pop() {
    if (this.top === null) return null;
    const returnObj = this.top;
    this.top = returnObj.next;
    return returnObj;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null ? true : false;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
  }

  enqueue(val) {
    if(this.front === null) this.front = new Node(val);
    let current = this.front;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(val);
  }

  dequeue() {
    if (this.front === null) return null;
    let returnObj = this.front;
    this.front = returnObj.next;
    return returnObj;
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    return this.front === null ? true : false;
  }
}


module.exports = { Node, Stack, Queue }
const { Stack, PseudoQueue } = require('./queue-with-stacks.js');

describe('Stack', () => {
  describe('peek()', () => {
    const myStack = new Stack();
    it('should return undefined', () => {
      expect(myStack.peek()).toBeUndefined();
    })
    it('should return the element on the top of the stack', () => {
      myStack.storage = ['a', 'b', 'c'];
      expect(myStack.peek()).toEqual('a');
    })
    it('should not modify the stack', () => {
      expect(myStack.storage.length).toEqual(3)
    })

  })

  describe('push()', () => {
    const myStack = new Stack();
    it('should put new element on top of the stack', () => {
      myStack.push('a');
      expect(myStack.storage[0]).toEqual('a');
    })
    it('should increment the length of storage by 1', () => {
      expect(myStack.storage.length).toEqual(1);
    })
  })

  describe('pop()', () => {
    const myStack = new Stack();
    it('should return undefined if Stack is empty', () => {
      expect(myStack.pop()).toBeUndefined();
    })
    it('should return the top if Stack is populated', ()=> {
      myStack.storage = ['a', 'b', 'c'];
      expect(myStack.pop()).toBe('a');
    })
    it('should decrement the length of storage by one', () => {
      expect(myStack.storage.length).toEqual(2);

    })
  })
})

describe('PseudoQueue', () => {
  describe('instantiate', () => {
    it('should not break when instantiated wtih no args', () => {
      const myQueue = new PseudoQueue();
      expect(myQueue.stackA.storage).not.toBeUndefined();
    })
  })


  describe('enqueue()', () => {
    const myQueue = new PseudoQueue(new Stack);
    it('should add a value to the end', () => {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      expect(myQueue.stackB.storage[0]).toEqual('b');
      myQueue.enqueue('c');
      expect(myQueue.stackB.storage[0]).toEqual('c');
    })
    it('should increment the length of storage A and B', () => {
      expect(myQueue.stackA.storage.length).toEqual(3)
      expect(myQueue.stackB.storage.length).toEqual(3)
    })

  })
  describe('dequeue()', () => {
    const myQueue = new PseudoQueue(new Stack(), new Stack());
    it ('should return undefined for an empty queue', () => {
      expect(myQueue.dequeue()).toBeUndefined();
      expect(myQueue.stackA.storage.length).toEqual(0)
    })
    it('should return the element at the front', () => {
      myQueue.stackA.storage = ['a', 'b', 'c'];
      myQueue.stackB.storage = ['c', 'b', 'a'];
      expect(myQueue.dequeue()).toEqual('a')
    })
  })

  describe('Enqueue() + Dequeue()', () => {
    const myQueue = new PseudoQueue(new Stack(), new Stack());
    it('should que and dequeue items in the right order', () => {
      myQueue.enqueue('tyler');
      myQueue.enqueue('cait');
      expect(myQueue.dequeue()).toEqual('tyler');
      expect(myQueue.dequeue()).toEqual('cait');
    })
  })
})
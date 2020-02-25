const { Node, Stack, Queue } = require('./stacks-and-queues.js')


describe('Stack', () => {
  describe('Instantiation', () => {
    const stack = new Stack();
    it('creates new stack', () => {
      expect(typeof stack).toEqual('object');
      expect(stack.top).toEqual(null)
    })
  })

  describe('Push()', () => {
    const stack = new Stack();
    it('can push onto stack', () => {
      stack.push('hi');
      expect(stack.top.value).toEqual('hi');
    })
    it('can push multiple values to stack', () => {
      stack.push('my');
      stack.push('name');
      stack.push('is');
      expect(stack.top.value).toEqual('is')
    })
  })

  describe('Pop()', () => {
    const stack = new Stack();
    it('returns null if stack is empty', () => {
      expect(stack.pop()).toEqual(null);
    })
    it('removes top from stack', () => {
      stack.top = new Node('hi');
      expect(stack.pop().value).toEqual('hi')
    })
    it('can remove all nodes from stack', () => {
      expect(stack.pop()).toEqual(null);
    })
  })

  describe('Peek()', () => {
    const stack = new Stack();
    it('can view the top node',() => {
      expect(stack.peek()).toEqual(null)
      stack.top = new Node('hi');
      expect(stack.peek().value).toEqual('hi')
    })
  })

  describe('isEmpty()', () => {
    const stack = new Stack();
    it('returns true if empty', () => {
      expect(stack.isEmpty()).toEqual(true);
    })
    it('returns false if not empty', () => {
      stack.top = new Node('hi');
      expect(stack.isEmpty()).toEqual(false);
    })
  })
})

describe('Queue', () => {
  describe('Instantiation', () => {
    it('instantiates an empty queue', () => {
      const queue = new Queue();
      expect(queue.front).toEqual(null)
      expect(typeof queue).toEqual('object')
    })
  })

  describe('enqueue()', () => {
    const queue = new Queue();
    it('can enqueue multiple elements to a queue', () => {
      queue.enqueue('hi');
      queue.enqueue('my');
      queue.enqueue('name')
      
      //traverse the queue
      let current = queue.front;
      while(current.next) {
        current = current.next;
      }

      expect(current.value).toEqual('name');
    })
  })

  describe('dequeue()' , () => {
    const queue = new Queue(new Node('hi', new Node('my')));
    it('returns the front', () => {
      expect(queue.dequeue().value).toEqual('hi')
    })
    it('modifies the queue', () => {
      expect(queue.front.value).toEqual('my');
    })
    it('can empty out a queue', () => {
      queue.dequeue();
      expect(queue.front).toEqual(null)
    })
  })
})  

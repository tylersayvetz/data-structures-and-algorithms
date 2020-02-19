

class LinkedList {
  constructor(head = null) {
    this.head = new Node(head, null);
  }


  //insert a node at the beginning of the list O(1)
  insert(value) {
    const newHead = new Node(value, this.head)
    this.head = newHead;
  }

  //insert a node at the end of the list O(n)
  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value, null);

  }

  //find a node with value. <= O(n)
  find(target) {
    if (this.head.value === target) { return true } //check the beginning

    let current = this.head;
    while (current.next !== null) {
      current = current.next //move to the next one.
      if (current.value === target) { return true } //check it
    }
    return false;
  }

  //print out entire list. O(n)
  toString() {
    let current = this.head;
    let output = `{${current.value}}->`;
    while (current.next !== null) {
      current = current.next;
      output += `{${current.value}}->`;
    }

    console.log(output + 'null');
  }


  reverse() {
    //get to the end, carrying with you the previous node and a next node.. O(n) + 1
    let current = this.head;
    let prev = null
    let next = null
    while (current.next !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    //at the end of the list, set the final pointer and then set the new head.
    current.next = prev;
    this.head = current;
  }

  insertBefore(target, newVal) {
    if (target) {
      let current = this.head;
      if (current.value === target) {
        this.insert(newVal);
        return;
      }

      //main while loop for traversal
      while (current.next && current.next.value !== target) {
        current = current.next;
      }

      //if we broke out of the while loop, that means we are 
      //at the end OR the next nodes value is our target
      if (current.next === null) {
        //were at the end
        return 'exception';
      }
      //were at the target
      const node = new Node(newVal, current.next);
      current.next = node;
    } else {
      return 'exception';
    }
  }

  insertAfter(target, newVal) {
    if (target) {
      let current = this.head;
      while (current.next && current.value !== target) {
        current = current.next;
      }
      //we are somewhere where the current.value is the target
      // (maybe were still sitting at the head because the while loop never ran)
      if (current.value === target) {
        const node = new Node(newVal, current.next);
        current.next = node;
      }
      //if were at the end (and by inference from the prior if() we know that we are not at our target.)
      else if (current.next === null) {
        return 'exception';
      }
    } else {
      return 'exception';
    }
  }
}




class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// instantiate the list and add a head.
const myList = new LinkedList('H');



for (let i = 0; i < 20; i++) {
  myList.insert(i);
}

myList.reverse();
myList.insertAfter(19, 'rabbit')
myList.toString();





jest.spyOn(global.console, 'log');

describe('The linked list should instantiate and operate well. Also test toString.', () => {
  it('Instantiate list with no head', () => {
    const myList = new LinkedList();
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{null}->null');
  })
  it('Instantiate list with head', () => {
    const myList = new LinkedList('H');
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{H}->null')
  })
})

describe('The linked list should be able to do various basic data operations', () => {
  it('It should append with good input', () => {
    const myList = new LinkedList();
    myList.append('A');
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{null}->{A}->null')
  })
  it('It should insert', () => {
    const myList = new LinkedList();
    myList.insert('I');
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{I}->{null}->null')
  })
  it('it should reverse a list and set the new head.', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 3; i++) {
      myList.append(i);
    }
    expect(myList.head.value).toEqual('H');
    myList.reverse();
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{2}->{1}->{0}->{H}->null');
    expect(myList.head.value).toEqual(2);
  })
  it('it should be able to find an element, and after reversal.', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 10; i++) {
      myList.append(i);
    }
    expect(myList.find(0)).toEqual(true);
    expect(myList.find(54)).toEqual(false);
    expect(myList.find('H')).toEqual(true);

    myList.reverse();
    expect(myList.find(9)).toEqual(true);
    expect(myList.find(33)).toEqual(false);
    expect(myList.find(null)).toEqual(false);
  })
})

describe('test InsertBefore() function', () => {
  it('It should insert the element in the proper place and reject invallid input.', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 5; i++) {
      myList.append(i);
    }
    myList.insertBefore('H', 'hi');
    expect(myList.head.value).toEqual('hi');

    myList.insertBefore(4, 'hi');
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{hi}->{H}->{0}->{1}->{2}->{3}->{hi}->{4}->null');
    expect(myList.insertBefore(19, 'hi')).toEqual('exception');
  })
})

describe('test InsertAfter() function', () => {
  it('should insert a node after the target node and reject invalid input.', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 3; i++) {
      myList.append(i);
    }
    myList.insertAfter('H', 'hi');
    myList.insertAfter(2, 'hi');
    myList.toString();
    jest.spyOn(global.console, 'log');
    expect(console.log).toHaveBeenCalledWith('{H}->{hi}->{0}->{1}->{2}->{hi}->null');
    expect(myList.insertAfter('A', 'hi')).toEqual('exception');
  })
})



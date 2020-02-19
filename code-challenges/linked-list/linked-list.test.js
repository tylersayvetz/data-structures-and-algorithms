

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
    if (this.head.value === target) { return true }

    let current = this.head;
    while (current.next !== null) {
      current = current.next
      if (current.value === target) { return true }
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
    while(current.next !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    //at the end of the list, set the final pointer and then set the new head.
    current.next = prev;
    this.head = current;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//instantiate the list and add a head.
const myList = new LinkedList('H');



// for (let i = 0; i < 5; i++) {
//   myList.insert(i);
// }

// myList.reverse();
myList.toString();



jest.spyOn(global.console, 'log');

describe('The linked list should instantiate and operate well. Also test toString.', () => {
  it('Instantiate list with no head', () => {
    const myList = new LinkedList();
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{No Value}->null');
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
    expect(console.log).toHaveBeenCalledWith('{No Value}->{A}->null')
  })
  it('It should insert', () => {
    const myList = new LinkedList();
    myList.insert('I');
    myList.toString();
    expect(console.log).toHaveBeenCalledWith('{I}->{No Value}->null')
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
    expect(myList.find(5)).toEqual(true);
    expect(myList.find(54)).toEqual(false);
    myList.reverse();
    expect(myList.find(4)).toEqual(true);
    expect(myList.find(33)).toEqual(false);
    expect(myList.find('H')).toEqual(true);
  })
})
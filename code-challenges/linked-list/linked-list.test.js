

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

  kthFromEnd(k) { //what is this??? this is in worst case O(n) * 3.
    if (k < 0) return 'exception';

    //reverse the LL
    this.reverse();

    //iterate k times (or to the end)
    let current = this.head;
    while (current.next && k > 0) {
      current = current.next;
      k--;
    }

    //if we iterated k times, return the resultant value.
    if (k === 0) {
      this.reverse();
      return current.value;
    }
    //if the above failed, we must be at the end, meaning k > LL.length
    else if (!current.next) {
      return 'exception'
    }

    //reverse the LL back to normal.
    this.reverse();
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

  //this is O(n)
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
    } else return 'exception';
  }

  //this is O(n)
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

// // instantiate the list and add a head.
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

// const listA = new LinkedList('H');
// const listB = new LinkedList('H');

// for (let i = 0; i < 6; i++) {
//   listA.append(i);
//   listB.append(letters[i % letters.length])
// }
// // listA.append('6')

// listA.toString();
// listB.toString();

// const myList = zipLL(listA, listB);
// myList.toString();

function zipLL(listA, listB) {
  let currA = listA.head;
  let currB = listB.head;

  //todo: this can be dried out, but it makes it nearly unreadable. 
  while (currA.next || currB.next) {
    //if both lists have more length on them
    if (currA.next && currB.next) {
      //store the next's
      let origA, origB;
      origA = currA.next;
      origB = currB.next;

      //perform the zip
      currA.next = currB.next;
      currB.next = currA;

      //traverse one up
      currA = origA;
      currB = origB;
      //a is shorter
    } else if (!currA.next) {
      console.log('A ran out')
      currA.next = currB.next;
      currB.next = currA;
      break;
      //b is shorter
    } else if (!currB.next) {
      console.log('B Ran out')
      currB.next = currA;
      break;
    }
  }
  //both same length
  if (!currA.next && !currB.next) {
    currB.next = currA;
  }
  return listB
}




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

describe('The kthFromEnd() function should return the Kth value from the end of the list', () => {
  it('it should return happy trail value', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 30; i++) {
      myList.append(i);
    }
    expect(myList.kthFromEnd(10)).toEqual(19);
  })
  it('it should deal with a value that is greater than the length of the list.', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 30; i++) {
      myList.append(i);
    }
    expect(myList.kthFromEnd(600)).toEqual('exception');
  })
  it('it should return the head if the k is equal to the LL length', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 30; i++) {
      myList.append(i);
    }
    expect(myList.kthFromEnd(30)).toEqual('H');
  })
  it('should return the value on the end of the tail if 0 is passed', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 30; i++) {
      myList.append(i);
    }
    expect(myList.kthFromEnd(0)).toEqual(29);
  })
  it('should reject invalid input for k', () => {
    const myList = new LinkedList('H');
    for (let i = 0; i < 30; i++) {
      myList.append(i);
    }
    expect(myList.kthFromEnd(-1)).toEqual('exception');
  })

  describe('Test zipLL()', () => {


    it('should zip together two lists of equal length', () => {
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

      const listA = new LinkedList('H');
      const listB = new LinkedList('H');

      for (let i = 0; i < 6; i++) {
        listA.append(i);
        listB.append(letters[i % letters.length])
      }
      const myList = zipLL(listA, listB);
      myList.toString();
      expect(console.log).toHaveBeenCalledWith('{H}->{H}->{a}->{0}->{b}->{1}->{c}->{2}->{d}->{3}->{e}->{4}->{f}->{5}->null');
    })

    it('should zip togetherto lsits of UNequal length', () => {
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

      const listA = new LinkedList('H');
      const listB = new LinkedList('H');

      for (let i = 0; i < 6; i++) {
        listA.append(i);
        listB.append(letters[i % letters.length])
      }
      listA.append(6)
      const myList = zipLL(listA, listB);
      myList.toString();
      expect(console.log).toHaveBeenCalledWith('{H}->{H}->{a}->{0}->{b}->{1}->{c}->{2}->{d}->{3}->{e}->{4}->{f}->{5}->{6}->null')
    })

    it('should zip together two empty lists', () => {
      const listC = new LinkedList();
      const listD = new LinkedList();

      const myList = zipLL(listC, listD);
      myList.toString();
      expect(console.log).toHaveBeenCalledWith('{null}->{null}->null')
    })
  })
})



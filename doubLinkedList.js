// nodes that have both a next node and a previous node property
class DoubleNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  //returns the double linked list as a compact array
  array(node = this.head, arr = []) {
    if (node) {
      arr.push(node.val);
      return this.array(node.next, arr);
    } else {
      return arr;
    }
  }

  // returns the double linked list as a compact array, but in reverse
  reverseArray(node = this.tail, arr = []) {
    if (node) {
      arr.push(node.val);
      return this.reverseArray(node.prev, arr);
    } else {
      return arr;
    }
  }

  // returns a boolean if there's a node that contains the inputted value
  find(val, node = this.head) {
    if (node) {
      if (val === node.val) {
        return true;
      }
      return this.find(val, node.next);
    }
    return false;
  }

  // pushes a node with a value to the end of the double linked list
  push(val) {
    let newNode = new DoubleNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  //removes a node at the end of the double linked list and returns its value. Fails if the list is empty
  pop() {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else if (this.length === 1) {
      let returnVal = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    } else {
      let returnVal = this.tail.val;
      let currentNode = this.tail.prev;
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return returnVal;
    }
  }

  //adds a node to the start of the double linked list
  unshift(val) {
    let newNode = new DoubleNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  //removes the first node of the linked list and returns the removed value. Throws an error if the list is empty
  shift() {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else if (this.length === 1) {
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode.val;
    } else {
      let currentNode = this.head;
      this.head = currentNode.next;
      this.head.prev = null;
      this.length--;
      return currentNode.val;
    }
  }

  //returns the node at the inputted index
  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("inputted index is invalid");
    }
    let i = 0;
    let currentNode = this.head;

    while (i < idx) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  //inserts a value at the specified index in the linked list
  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("inputted index is invalid");
    } else if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < idx) {
        currentNode = currentNode.next;
        i++;
      }
      let newNode = new DoubleNode(val);
      newNode.prev = currentNode.prev;
      newNode.next = currentNode;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
      this.length++;
    }
  }

  //removes a node at the specified index and returns the removed value. Throws an error if either the list is empty or the index is invalid
  removeAt(idx) {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else {
      if (idx >= this.length || idx < 0) {
        throw new Error("inputted index is invalid");
      } else if (idx === 0) {
        return this.shift();
      } else if (idx === this.length - 1) {
        return this.pop();
      } else {
        let i = 0;
        let currentNode = this.head;
        while (i < idx) {
          currentNode = currentNode.next;
          i++;
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.next = null;
        currentNode.prev = null;
        this.length--;
        return currentNode.val;
      }
    }
  }

  //gets the average
  getAverage() {
    if (this.head) {
      let currentNode = this.head;
      let avg = 0;
      while (currentNode) {
        avg += currentNode.val;
        currentNode = currentNode.next;
      }
      return avg / this.length;
    }
    throw new Error("linked list is empty");
  }

  //reverses the double linked list in place
  reverse() {
    if (this.length === 0 || this.length === 1) {
      throw new Error("not enough nodes to reverse");
    }
    let currentNode = this.head;
    let newHeadNode = this.tail;
    for (let i = 0; i < this.length; i++) {
      this.head = currentNode.next;
      currentNode.next = newHeadNode.next;
      currentNode.prev = this.head;
      newHeadNode.next = currentNode;
      if (i === 0) {
        this.tail = currentNode;
      }
      currentNode = this.head;
    }
    newHeadNode.next = this.head;
    newHeadNode.prev = null;
    this.head = newHeadNode;
  }
}

module.exports = { DoubleLinkedList };

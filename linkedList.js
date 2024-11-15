class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  //makes an array of the linked list
  array(node = this.head, arr = []) {
    if (node) {
      arr.push(node.val);
      return this.array(node.next, arr);
    } else {
      return arr;
    }
  }

  //tells if the value inputted is in the linked list
  find(val, node = this.head) {
    if (node) {
      if (val === node.val) {
        return true;
      }
      return this.find(val, node.next);
    }
    return false;
  }

  //adds an inputted value to the end of the linked list
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //removes a value from the end of the linked list
  pop() {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
      return currentNode.val;
    }
  }

  //adds an inputted value to the start of the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  //removes a value from the start of the linked list
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
      this.length--;
      return currentNode.val;
    }
  }

  //gets the value at the inputted index of the linked list
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("inputted index is invalid");
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < idx) {
        currentNode = currentNode.next;
        i++;
      }
      return currentNode.val;
    }
  }

  //inserts an inputted value at the inputted index of the linked list
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
      let prevNode = null;
      while (i < idx) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      let newNode = new Node(val);
      prevNode.next = newNode;
      newNode.next = currentNode;
      this.length++;
    }
  }

  //removes the value at the inputted index of the linked list
  removeAt(idx) {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else {
      if (idx < 0 || idx >= this.length) {
        throw new Error("inputted index is invalid");
      } else if (idx === 0) {
        return this.shift();
      } else if (idx === this.length - 1) {
        return this.pop();
      } else {
        let i = 0;
        let currentNode = this.head;
        let prevNode = null;
        while (i < idx) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          i++;
        }
        prevNode.next = currentNode.next;
        this.length--;
        return currentNode.val;
      }
    }
  }

  //if the linked list is comprised of numbers, gets the average of the numbers of the linked list
  getAverage() {
    let currentNode = this.head;
    if (!currentNode) {
      throw new Error("linked list is empty");
    }
    let avg = 0;
    while (currentNode) {
      avg += currentNode.val;
      currentNode = currentNode.next;
    }
    return avg / this.length;
  }

  //reverses a linked list in place
  reverse() {
    if (this.length === 0 || this.length === 1) {
      throw new Error("not enough nodes to reverse");
    }
    let currentNode = this.head;
    let newHeadNode = this.tail;

    for (let i = 0; i < this.length; i++) {
      this.head = currentNode.next;
      currentNode.next = newHeadNode.next;
      newHeadNode.next = currentNode;
      if (i === 0) {
        this.tail = currentNode;
      }
      currentNode = this.head;
    }
    newHeadNode.next = this.head;
    this.head = newHeadNode;
  }

  //pivots all values less than the inputted value to the left side of the linked list
  pivot(val) {
    let currentNode = this.head;
    let insertIDX = 0;
    let currentIDX = 0;
    while (currentNode) {
      if (currentNode.val < val) {
        let pivotVal = this.removeAt(currentIDX);
        this.insertAt(insertIDX, pivotVal);
        insertIDX++;
      }
      currentNode = currentNode.next;
      currentIDX++;
    }
  }
}

module.exports = { LinkedList };

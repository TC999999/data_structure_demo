class ArrayLinkedList {
  constructor(array = []) {
    let firstNode = array[0] ? new Node(array[0]) : null;
    this.head = firstNode;
    this.tail = firstNode;
    let length = firstNode ? 1 : 0;

    for (let i = 1; i < array.length; i++) {
      let newNode = new Node(array[i]);
      this.tail.next = newNode;
      this.tail = newNode;
      length++;
    }

    this.length = length;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  array(node = this.head, arr = []) {
    if (node) {
      arr.push(node.val);
      return this.array(node.next, arr);
    } else {
      return arr;
    }
  }

  find(val, node = this.head) {
    if (node) {
      if (val === node.val) {
        return true;
      }
      return this.find(val, node.next);
    }
    return false;
  }

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

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("inputted index is invalid");
    } else if (idx === 0) {
      this.unshift(val);
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

  removeAt(idx) {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else {
      if (idx < 0 || idx >= this.length) {
        throw new Error("inputted index is invalid");
      }
      if (idx === 0) {
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

  getAverage() {
    let currentNode = this.head;
    let avg = 0;
    while (currentNode) {
      avg += currentNode.val;
      currentNode = currentNode.next;
    }
    return avg / this.length;
  }

  reverse() {
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

let aLL = new ArrayLinkedList([7, 6, 2, 5, 3, 5, 9, 1, 1]);
let eALL = new ArrayLinkedList([]);
let eALL2 = new ArrayLinkedList();

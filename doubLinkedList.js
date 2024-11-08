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

  array(node = this.head, arr = []) {
    if (node) {
      arr.push(node.val);
      return this.array(node.next, arr);
    } else {
      return arr;
    }
  }

  reverseArray(node = this.tail, arr = []) {
    if (node) {
      arr.push(node.val);
      return this.reverseArray(node.prev, arr);
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
    return currentNode.val;
  }

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("inputted index is invalid");
    } else if (idx === 0) {
      this.unshift(val);
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

  removeAt(idx) {
    if (this.length === 0) {
      throw new Error("Linked List is already empty");
    } else {
      if (idx >= this.length || idx < 0) {
        throw new Error("inputted index is invalid");
      } else if (idx === 0) {
        this.shift();
      } else if (idx === this.length - 1) {
        this.pop();
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

const dll = new DoubleLinkedList();
const eDLL = new DoubleLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);

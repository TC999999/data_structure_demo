//can only add values to the end of the queue and can only remove values from the start

class QueueNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor(first = null, last = null, size = 0) {
    this.first = first;
    this.last = last;
    this.size = size;
  }

  //adds a value to the end of the queue
  enqueue(val) {
    let newNode = new QueueNode(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  // removes a value from the start of the queue and returns removed value. Throws an error if queue is empty
  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is already empty");
    } else if (this.size === 1) {
      let currentNode = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return currentNode.val;
    } else {
      let currentNode = this.first;
      this.first = currentNode.next;
      this.size--;
      return currentNode.val;
    }
  }

  // returns the value of the node at the start of the queue
  peek() {
    if (this.first) {
      return this.first.val;
    } else {
      return null;
    }
  }

  // returns a boolean if the queue is empty
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = { Queue };

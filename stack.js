// can only add values to the top of the stack and can only remove values from the top as wel

class StackNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor(bottom = null, top = null, size = 0) {
    this.bottom = bottom;
    this.top = top;
    this.size = size;
  }

  //pushes a node with a value to the top of the stack
  push(val) {
    let newNode = new StackNode(val);
    if (this.size === 0) {
      this.bottom = newNode;
      this.top = newNode;
      this.size++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  }

  //removes the node at the top of the stack and returns its value. Throws an error if the stack is empty
  pop() {
    if (this.size === 0) {
      throw new Error("Stack is already empty");
    } else if (this.size === 1) {
      let returnVal = this.top.val;
      this.top = null;
      this.bottom = null;
      this.size--;
      return returnVal;
    } else {
      let currentNode = this.top;
      this.top = currentNode.next;
      this.size--;
      return currentNode.val;
    }
  }

  // returns the value of the node at the top of the stack
  peek() {
    if (this.top) {
      return this.top.val;
    } else {
      return null;
    }
  }

  // returns a boolean if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  //shows the stack as a compact array
  array() {
    let arr = [];
    if (this.size) {
      let currentNode = this.top;
      while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
      }
    }
    return arr;
  }
}

module.exports = { Stack };

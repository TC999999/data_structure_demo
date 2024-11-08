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

  peek() {
    if (this.top) {
      return this.top.val;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

const s = new Stack();
const emptyS = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);

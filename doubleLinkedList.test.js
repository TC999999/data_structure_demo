const { DoubleLinkedList } = require("./doubLinkedList");

describe("Double Linked List", function () {
  let dl;
  let edl;
  let len;

  beforeAll(function () {
    edl = new DoubleLinkedList();
  });

  beforeEach(function () {
    dl = new DoubleLinkedList();
    dl.push(1);
    dl.push(2);
    dl.push(3);
    dl.push(4);
    len = dl.length;
  });

  test("array() returns the double linked list as an array", function () {
    expect(dl.array()).toEqual([1, 2, 3, 4]);
    expect(edl.array()).toEqual([]);
  });

  test("reverseArray() returns the double linked list as a reversed array", function () {
    expect(dl.reverseArray()).toEqual([4, 3, 2, 1]);
    expect(edl.reverseArray()).toEqual([]);
  });

  test("find() returns a boolean for if a node with the inputted value exists in the list", function () {
    expect(dl.find(3)).toBe(true);
    expect(dl.find(5)).toBe(false);
    expect(edl.find(1)).toBe(false);
  });

  test("push() adds a node with the inputted value to the end of a linked list and replace the tail", function () {
    expect(dl.tail.val).toEqual(4);
    expect(dl.tail.prev.val).toEqual(3);

    dl.push(5);
    expect(dl.tail.val).toEqual(5);
    expect(dl.tail.prev.val).toEqual(4);
    expect(dl.tail.prev.prev.val).toEqual(3);
    expect(dl.length).toEqual(len + 1);
  });

  test("pushing onto an empty linked list makes the new node both the head and the tail of linked list", function () {
    expect(edl.tail).toBe(null);
    expect(edl.head).toEqual(null);

    edl.push(0);
    expect(edl.tail.val).toEqual(0);
    expect(edl.head.val).toEqual(0);
    expect(edl.head.next).toBe(null);
    expect(edl.tail.prev).toBe(null);
    expect(edl.length).toEqual(1);
  });

  test("pop() removes a value from the end of a doubly linked list", function () {
    expect(dl.tail.val).toEqual(4);
    expect(dl.tail.prev.val).toEqual(3);

    expect(dl.pop()).toEqual(4);
    expect(dl.tail.val).toEqual(3);
    expect(dl.tail.prev.val).toEqual(2);
    expect(dl.length).toEqual(len - 1);
  });

  test("popping from a linked list with only one node removes both the head and the tail of linked list", function () {
    expect(edl.tail.val).toEqual(0);
    expect(edl.head.val).toEqual(0);

    expect(edl.pop()).toEqual(0);
    expect(edl.tail).toEqual(null);
    expect(edl.head).toEqual(null);
    expect(edl.length).toEqual(0);
  });

  test("throws an error when attempting to pop from an empty linked list", function () {
    expect(edl.tail).toBe(null);
    expect(edl.head).toBe(null);
    expect(() => edl.pop()).toThrow("Linked List is already empty");
  });

  test("unshift() adds a node with a value to the start of a double linked list", function () {
    expect(dl.head.val).toEqual(1);
    expect(dl.head.next.val).toEqual(2);

    dl.unshift(0);
    expect(dl.head.val).toEqual(0);
    expect(dl.head.next.val).toEqual(1);
    expect(dl.head.next.next.val).toEqual(2);
    expect(dl.head.next.prev.val).toEqual(0);
    expect(dl.length).toEqual(len + 1);
  });

  test("unshifting onto an empty linked list makes the the new node both the head and the tail", function () {
    expect(edl.head).toBe(null);
    expect(edl.tail).toBe(null);

    edl.unshift(5);
    expect(edl.tail.val).toEqual(5);
    expect(edl.head.val).toEqual(5);
    expect(edl.head.next).toBe(null);
    expect(edl.tail.prev).toBe(null);
    expect(edl.length).toEqual(1);
  });

  test("shift() removes the first node of the double linked list and return its value", function () {
    expect(dl.head.val).toEqual(1);
    expect(dl.head.next.val).toEqual(2);

    expect(dl.shift()).toEqual(1);
    expect(dl.head.val).toEqual(2);
    expect(dl.head.prev).toBe(null);
    expect(dl.head.next.val).toEqual(3);
    expect(dl.length).toEqual(len - 1);
  });

  test("shifting from a linked list with only one node removes both the head and the tail", function () {
    expect(edl.head.val).toEqual(5);
    expect(edl.tail.val).toEqual(5);

    expect(edl.shift()).toEqual(5);
    expect(edl.tail).toEqual(null);
    expect(edl.head).toEqual(null);
    expect(edl.length).toEqual(0);
  });

  test("shifting from an empty linked list throws an error", function () {
    expect(edl.head).toBe(null);
    expect(edl.tail).toBe(null);

    expect(() => edl.shift()).toThrow("Linked List is already empty");
  });

  test("getAt() returns the value in the node at the inputted index", function () {
    expect(dl.getAt(0).val).toEqual(1);
    expect(dl.getAt(2).val).toEqual(3);
    expect(dl.getAt(3).val).toEqual(4);
  });

  test("insertAt() inserts a node with a value at the specified index in the linked list", function () {
    expect(dl.getAt(1).val).toEqual(2);
    expect(dl.getAt(1).next.val).toEqual(3);
    expect(dl.getAt(1).prev.val).toEqual(1);

    dl.insertAt(1, 1.5);
    expect(dl.getAt(1).val).toEqual(1.5);
    expect(dl.getAt(1).next.val).toEqual(2);
    expect(dl.getAt(1).prev.val).toEqual(1);
    expect(dl.length).toEqual(len + 1);
    expect(dl.array()).toEqual([1, 1.5, 2, 3, 4]);
  });

  test("inserting at index 0 unshifts the value", function () {
    expect(dl.head.val).toEqual(1);
    expect(dl.head.next.val).toEqual(2);

    dl.insertAt(0, 0);
    expect(dl.head.val).toEqual(0);
    expect(dl.head.next.val).toEqual(1);
    expect(dl.length).toEqual(len + 1);

    expect(edl.head).toBe(null);
    expect(edl.tail).toBe(null);

    edl.insertAt(0, 0);
    expect(edl.head.val).toEqual(0);
    expect(edl.tail.val).toEqual(0);
    expect(edl.head.next).toBe(null);
    expect(edl.tail.prev).toBe(null);
    expect(edl.length).toEqual(1);
  });

  test("inserting at index equal to the length of the linked list pushes the value", function () {
    expect(dl.tail.val).toEqual(4);
    expect(dl.tail.prev.val).toEqual(3);

    dl.insertAt(4, 5);
    expect(dl.tail.val).toEqual(5);
    expect(dl.tail.prev.val).toEqual(4);
    expect(dl.length).toEqual(len + 1);

    expect(edl.head.val).toEqual(0);
    expect(edl.tail.val).toEqual(0);
    expect(edl.head.next).toBe(null);
    expect(edl.tail.prev).toBe(null);

    edl.insertAt(1, 1);
    expect(edl.head.next.val).toBe(1);
    expect(edl.tail.prev.val).toBe(0);
    expect(edl.length).toEqual(2);
  });

  test("inserting at an invalid index throws an error", function () {
    expect(() => dl.insertAt(-1, 0)).toThrow("inputted index is invalid");
    expect(() => edl.insertAt(3, 1)).toThrow("inputted index is invalid");
    expect(() => dl.insertAt(6, 7)).toThrow("inputted index is invalid");
  });

  test("removeAt() removes a node at the specified index and returns its value", function () {
    expect(dl.getAt(2).val).toEqual(3);
    expect(dl.getAt(2).next.val).toEqual(4);
    expect(dl.getAt(2).prev.val).toEqual(2);

    expect(dl.removeAt(2)).toEqual(3);
    expect(dl.getAt(2).val).toEqual(4);
    expect(dl.getAt(2).next).toBe(null);
    expect(dl.getAt(2).prev.val).toEqual(2);
    expect(dl.length).toEqual(3);
    expect(dl.array()).toEqual[(1, 2, 4)];
  });

  test("removing a value at index 0 simply shifts the node from the linked list", function () {
    expect(dl.head.val).toEqual(1);
    expect(dl.head.next.val).toEqual(2);
    expect(dl.head.prev).toBe(null);

    expect(dl.removeAt(0)).toEqual(1);
    expect(dl.head.val).toEqual(2);
    expect(dl.head.next.val).toEqual(3);
    expect(dl.head.prev).toBe(null);

    expect(edl.head.val).toEqual(0);
    expect(edl.head.next.val).toEqual(1);
    expect(edl.head.prev).toBe(null);

    expect(edl.removeAt(0)).toEqual(0);
    expect(edl.head.val).toEqual(1);
    expect(edl.head.next).toBe(null);
    expect(edl.head.prev).toBe(null);
  });

  test("removing a value at the last index of the linked list pops the last node", function () {
    expect(dl.tail.val).toEqual(4);
    expect(dl.tail.next).toBe(null);
    expect(dl.tail.prev.val).toEqual(3);

    expect(dl.removeAt(3)).toEqual(4);
    expect(dl.tail.val).toEqual(3);
    expect(dl.tail.next).toBe(null);
    expect(dl.tail.prev.val).toEqual(2);

    expect(edl.tail.val).toEqual(1);
    expect(edl.tail.next).toBe(null);
    expect(edl.tail.prev).toBe(null);

    expect(edl.removeAt(0)).toEqual(1);
    expect(edl.head).toBe(null);
    expect(edl.head).toBe(null);
  });

  test("removing from an empty list throws an error", function () {
    expect(() => edl.removeAt(0)).toThrow("Linked List is already empty");
  });

  test("removing from a linked list at an invalid index throws an error", function () {
    expect(() => dl.removeAt(-1)).toThrow("inputted index is invalid");
    expect(() => dl.removeAt(4)).toThrow("inputted index is invalid");
    expect(() => dl.removeAt(10)).toThrow("inputted index is invalid");
  });

  test("getAverage() takes the average of the linked list, throws an error if empty", function () {
    expect(dl.getAverage()).toEqual(2.5);
    expect(() => edl.getAverage()).toThrow("linked list is empty");
  });

  test("reverse() reverses the linked list in place", function () {
    dl.reverse();
    expect(dl.array()).toEqual([4, 3, 2, 1]);
    dl.reverse();
    expect(dl.array()).toEqual([1, 2, 3, 4]);
  });

  test("reverse throws an error if the list has one or less nodes", function () {
    expect(() => edl.reverse()).toThrow("not enough nodes to reverse");
  });
});

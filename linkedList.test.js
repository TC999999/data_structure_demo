const { LinkedList } = require("./linkedList.js");

describe("Singly Linked List", function () {
  let l;
  let el;
  let len;

  beforeAll(function () {
    el = new LinkedList();
  });

  beforeEach(function () {
    l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    l.push(5);
    len = l.length;
  });

  test("make an array from the linked list", function () {
    expect(l.array()).toEqual([1, 2, 3, 4, 5]);
  });

  test("finds node with inputted value in linked list", function () {
    expect(l.find(1)).toBeTruthy();
    expect(l.find(6)).toBeFalsy();
  });

  test("values can be pushed at the end of the linked list", function () {
    l.push(6);
    expect(l.tail.val).toEqual(6);
    expect(l.length).toEqual(len + 1);
  });

  test("values pushed into an empty linked list become both the head and the tail", function () {
    el.push(1);
    expect(el.head.val).toEqual(1);
    expect(el.tail.val).toEqual(1);
  });

  test("values can be popped from the end of the linked list", function () {
    l.pop();
    expect(l.tail.val).toEqual(4);
    expect(l.length).toEqual(len - 1);
  });

  test("popping from a linked list with only one value removes both the head and the tail", function () {
    expect(el.head.val).toEqual(1);
    expect(el.tail.val).toEqual(1);
    el.pop();
    expect(el.head).toBe(null);
    expect(el.tail).toBe(null);
  });

  test("fails to pop an empty linked list", function () {
    expect(() => el.pop()).toThrow("Linked List is already empty");
  });

  test("values can be unshifted at the start of the linked list", function () {
    l.unshift(0);
    expect(l.head.val).toEqual(0);
    expect(l.length).toEqual(len + 1);
  });

  test("values that are unshifted into an empty linked list become both the head and the tail", function () {
    el.unshift(0);
    expect(el.head.val).toEqual(0);
    expect(el.tail.val).toEqual(0);
  });

  test("values can be removed from the start of (or shifted from) the linked list", function () {
    l.shift();
    expect(l.head.val).toEqual(2);
    expect(l.length).toEqual(len - 1);
  });

  test("shifting from a linked list with only one value removes both the head and the tail", function () {
    expect(el.head.val).toEqual(0);
    expect(el.tail.val).toEqual(0);
    el.shift();
    expect(el.head).toBeNull();
    expect(el.tail).toBeNull();
  });

  test("fails to shift from an empty linked list", function () {
    expect(() => el.shift()).toThrow("Linked List is already empty");
  });

  test("returns the value at the inputted index of the linked list", function () {
    expect(l.getAt(0)).toEqual(1);
    expect(l.getAt(2)).toEqual(3);
    expect(l.getAt(4)).toEqual(5);
  });

  test("fails to return the value of an invalid index", function () {
    expect(() => l.getAt(-1)).toThrow("inputted index is invalid");
    expect(() => l.getAt(6)).toThrow("inputted index is invalid");
  });

  test("inserts value into linked list at any valid index inputted", function () {
    expect(l.getAt(2)).toEqual(3);
    l.insertAt(2, 2.5);
    expect(l.getAt(2)).toEqual(2.5);
    expect(l.getAt(3)).toEqual(3);
    expect(l.length).toEqual(len + 1);
  });

  test("unshifts value into linked list when index inputted is 0", function () {
    expect(l.getAt(0)).toEqual(1);
    expect(l.head.val).toEqual(1);

    l.insertAt(0, 0);
    expect(l.getAt(0)).toEqual(0);
    expect(l.head.val).toEqual(0);
    expect(l.length).toEqual(len + 1);
  });

  test("unshifts value into empty linked list when index inputted is 0", function () {
    expect(() => el.getAt(0)).toThrow("inputted index is invalid");

    el.insertAt(0, 1);
    expect(el.getAt(0)).toEqual(1);
    expect(el.head.val).toEqual(1);
    expect(el.tail.val).toEqual(1);
    expect(el.length).toEqual(1);
  });

  test("pushes value into linked list when index inputted is the length of the list", function () {
    expect(l.getAt(4)).toEqual(5);
    expect(l.tail.val).toEqual(5);

    l.insertAt(5, 6);
    expect(l.getAt(5)).toEqual(6);
    expect(l.tail.val).toEqual(6);
    expect(l.length).toEqual(len + 1);
  });

  test("fails to insert the value if the index is less than 0 or greater than the length of the list", function () {
    expect(() => l.insertAt(-1, -1)).toThrow("inputted index is invalid");
    expect(() => l.insertAt(10, 11)).toThrow("inputted index is invalid");
  });

  test("remove value from inputted index in linked list", function () {
    expect(l.getAt(2)).toEqual(3);
    l.removeAt(2);
    expect(l.getAt(2)).toEqual(4);
    expect(l.length).toEqual(len - 1);
  });

  test("removing a value from index 0 simply shifts value into the linked list", function () {
    expect(l.getAt(0)).toEqual(1);
    expect(l.head.val).toEqual(1);

    l.removeAt(0);
    expect(l.getAt(0)).toEqual(2);
    expect(l.head.val).toEqual(2);
    expect(l.length).toEqual(len - 1);
  });

  test("removing a value from the last index simply pops value into the linked list", function () {
    expect(l.getAt(len - 1)).toEqual(5);
    expect(l.tail.val).toEqual(5);

    l.removeAt(len - 1);
    expect(l.getAt(len - 2)).toEqual(4);
    expect(l.tail.val).toEqual(4);
    expect(l.length).toEqual(len - 1);
  });

  test("shifts value from linked list with only one valuewhen index inputted is 0", function () {
    expect(el.getAt(0)).toEqual(1);
    expect(el.head.val).toEqual(1);
    expect(el.tail.val).toEqual(1);
    expect(el.length).toEqual(1);

    el.removeAt(0);
    expect(() => el.getAt(0)).toThrow("inputted index is invalid");
    expect(el.head).toBeNull();
    expect(el.tail).toBeNull();
    expect(el.length).toEqual(0);
  });

  test("fails to remove value from empty linked list", function () {
    expect(() => el.removeAt(0)).toThrow("Linked List is already empty");
  });

  test("average function gets the average of the values in a linked list", function () {
    expect(l.getAverage()).toEqual(3);
    l.push(6);
    expect(l.getAverage()).toEqual(3.5);
  });

  test("reverse function reverses a linked list in place", function () {
    l.reverse();
    expect(l.array()).toEqual([5, 4, 3, 2, 1]);
    l.reverse();
    expect(l.array()).toEqual([1, 2, 3, 4, 5]);
  });

  test("fails to reverse a linked list less than 1 nodes", function () {
    expect(() => el.reverse()).toThrow("not enough nodes to reverse");

    el.push(0);
    expect(() => el.reverse()).toThrow("not enough nodes to reverse");

    el.push(1);
    el.reverse();
    expect(el.array()).toEqual([1, 0]);
  });

  test("pivot function moves all values less than the inputted val to the left side of the linked list", function () {
    let nl = new LinkedList();
    nl.push(8);
    nl.push(2);
    nl.push(4);
    nl.push(9);
    nl.push(7);
    nl.push(0);
    nl.push(3);
    nl.push(6);
    nl.push(1);
    nl.push(5);

    nl.pivot(5);
    expect(nl.array()).toEqual([2, 4, 0, 3, 1, 8, 9, 7, 6, 5]);
  });
});

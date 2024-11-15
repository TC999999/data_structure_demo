const { Stack } = require("./stack");

describe("Stack", function () {
  let s;
  let es;
  let si;

  beforeAll(function () {
    s = new Stack();
    es = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    si = s.size;
  });

  test("peek returns the value of the topmost node in the stack", function () {
    expect(s.peek()).toEqual(4);
    expect(es.peek()).toBe(null);
  });

  test("isEmpty returns whether the stack is empty or not", function () {
    expect(s.isEmpty()).toBe(false);
    expect(es.isEmpty()).toBe(true);
  });

  test("push adds values to the top of the stack", function () {
    expect(s.top.val).toEqual(4);
    s.push(5);
    expect(s.size).toEqual(si + 1);
    expect(s.top.val).toEqual(5);
  });

  test("pushing values to an empty stack makes the value both the top and the bottom", function () {
    expect(es.size).toEqual(0);
    expect(es.top).toBe(null);
    expect(es.bottom).toBe(null);

    es.push(1);
    expect(es.size).toEqual(1);
    expect(es.top.val).toBe(1);
    expect(es.bottom.val).toBe(1);
  });

  test("pop removes values from the top of the stack and returns the value", function () {
    expect(s.top.val).toEqual(5);
    expect(s.size).toEqual(si + 1);
    expect(s.pop()).toEqual(5);
    expect(s.top.val).toEqual(4);
    expect(s.size).toEqual(si);
  });

  test("popping values from a stack with one item removes both the head and the tail and returns the value", function () {
    expect(es.top.val).toEqual(1);
    expect(es.bottom.val).toEqual(1);
    expect(es.size).toEqual(1);
    expect(es.pop()).toEqual(1);
    expect(es.top).toBe(null);
    expect(es.bottom).toBe(null);
    expect(es.size).toEqual(0);
  });

  test("faisl to pop values from an empty stack", function () {
    try {
      es.pop();
    } catch (err) {
      expect(err.message).toEqual("Stack is already empty");
    }
  });
});

const { Queue } = require("./queue");

describe("Queue", function () {
  let q;
  let eq;
  let s;

  beforeAll(function () {
    eq = new Queue();
    q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    s = q.size;
  });

  test("peek at the first value in a queue", function () {
    expect(q.peek()).toEqual(1);
    expect(eq.peek()).toBe(null);
  });

  test("check if the queue is empty", function () {
    expect(q.isEmpty()).toBe(false);
    expect(eq.isEmpty()).toBe(true);
  });

  test("adds values to the end of the queue", function () {
    expect(q.last.val).toEqual(4);
    q.enqueue(5);
    expect(q.size).toEqual(s + 1);
    expect(q.last.val).toEqual(5);
  });

  test("adding a value to the end of an empty queue makes the new node both the head and tail", function () {
    expect(eq.size).toEqual(0);
    expect(eq.first).toBe(null);
    expect(eq.last).toBe(null);

    eq.enqueue(1);
    expect(eq.size).toEqual(1);
    expect(eq.first.val).toEqual(1);
    expect(eq.last.val).toEqual(1);
  });

  test("removes values from the the start of the queue", function () {
    expect(q.first.val).toEqual(1);
    q.dequeue();
    expect(q.size).toEqual(s);
    expect(q.first.val).toEqual(2);
  });

  test("removing values from a queue with one item in it removes both the head and the tail", function () {
    expect(eq.size).toEqual(1);
    expect(eq.first.val).toEqual(1);
    expect(eq.last.val).toEqual(1);
    eq.dequeue();

    expect(eq.size).toEqual(0);
    expect(eq.first).toBe(null);
    expect(eq.last).toBe(null);
  });

  test("throws an error when removing values from an empty queue", function () {
    try {
      eq.dequeue();
    } catch (err) {
      expect(err.message).toEqual("Queue is already empty");
    }
  });
});

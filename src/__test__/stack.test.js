'use strict';

const Stack = require('../lib/stack');

describe('stack.js testing', () => {
  describe('#push', () => {
    test('Should return value of newly pushed nodes', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack._storage.head.value).toEqual(1);
      stack.push(2);
      stack.push(3);
      expect(stack._storage.head.next.value).toEqual(2);
      expect(stack._storage.head.next.next.value).toEqual(3);
    });
  });
  describe('#pop', () => {
    test('Should return value of second to last node', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.pop();
      expect(stack._storage.head.value).toEqual(1);
      expect(stack._storage.head.next).toBeNull();
    });
    test('Should throw error due to empty list', () => {
      const stack = new Stack();
      expect(() => stack.pop()).toThrow('Cannot pop an empty list');
    });
  });
  describe('#peek', () => {
    test('Should return value of last node', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      let currNode = stack.peek();
      expect(currNode).toEqual(stack._storage.head.next);
      stack.pop();
      currNode = stack.peek();
      expect(currNode).toEqual(stack._storage.head);
    });
    test('Should return error for empty stack', () => {
      const stack = new Stack();
      expect(() => stack.peek()).toThrow('Cannot peek at an empty list');
    });
  });
  describe('#isEmpty', () => {
    test('Should return true for isEmpty check', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });
    test('Should return false for isEmpty check', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.isEmpty()).toBeFalsy();
      stack.push(2);
      expect(stack.isEmpty()).toBeFalsy();
    });
  });
});

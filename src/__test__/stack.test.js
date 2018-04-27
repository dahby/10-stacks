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
});

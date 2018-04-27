'use strict';

const Node = require('./node');

module.exports = class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }
    let currNode = this.head;
    while (currNode) {
      if (currNode.next === null) {
        currNode.next = node;
      }
      currNode = currNode.next;
    }
  }

  pop() {
    if (this.head === null) {
      throw new Error('Cannot pop an empty list');
    }
    let currNode = this.head;
    while (currNode) {
      if (currNode.next === null) {
        currNode = null;
      }
      currNode = currNode.next;
    }
  }

  peek() {
    if (this.head === null) {
      throw new Error('Cannot peek at an empty list');
    }
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } 
    return false;
  }
};

'use strict';

const Node = require('./node');
const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  push(value) {
    const node = new Node(value);

    if (!this._storage.head) {
      this._storage.head = node;
      return this._storage;
    }
    let currNode = this._storage.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
    return this._storage;
  }

  pop() {
    if (this._storage.head === null) {
      throw new Error('Cannot pop an empty list');
    }
    let currNode = this._storage.head;
    if (!currNode.next) {
      currNode = null;
    }
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    currNode.next = null;
    return this._storage.head;
  }

  peek() {
    if (this._storage.head === null) {
      throw new Error('Cannot peek at an empty list');
    }
    let currNode = this._storage.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  isEmpty() {
    if (this._storage.head === null) {
      return true;
    } 
    return false;
  }
};

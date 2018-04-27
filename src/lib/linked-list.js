'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  pop(position) {
    if (!this.head) {
      throw new Error('__ERROR__ Empty list');
    } 
    if (this.head.value === position) {
      this.head = this.head.next;
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;
      while (currentNode) {
        if (currentNode.value === position) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
    return this;
  }

  reduce() {
    let currentNode = this.head;
    let sum = 0;

    while (currentNode.next.value !== null) {
      sum += currentNode.value;
      currentNode = currentNode.next;
    }
    sum += currentNode.value;
    return sum;
  }
};

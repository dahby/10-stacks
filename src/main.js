'use strict';

const Stack = require('./lib/stack');

const stack = new Stack();

console.log(stack);
stack.isEmpty();
console.log(stack.isEmpty());
stack.push(1);
console.log(stack);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.peek(), 'peek');
stack.pop();
console.log(stack.peek(), 'peek dos')
console.log(stack.isEmpty());

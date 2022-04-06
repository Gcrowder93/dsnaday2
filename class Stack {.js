class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list = [...this.list, item];
    return this.list;
  }
  // take the this.list array
  // push item into this.list [], add 'item'
  pop() {
    const popped = this.list.splice(this.list.length - 1);
    return popped;
  }

  peek() {
    const peeked = this.list.slice(this.list.length - 1);
    return peeked;
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack);
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue = [...this.queue, item];
    return this.queue;
  }

  dequeue() {
    const popped = this.queue.splice(0, 1);
    return popped;
  }

  hasNext() {
    const whatever = this.queue[0];
    return whatever ? true : false;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue());

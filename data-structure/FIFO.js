class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0] || null;
  }

  update(index, value) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = value;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
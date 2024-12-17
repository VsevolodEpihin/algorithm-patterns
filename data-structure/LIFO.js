class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1] || null;
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
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = { value, next: null, prev: null };
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  get(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current.value;
      current = current.next;
      count++;
    }
    return null;
  }

  update(index, value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        current.value = value;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }

  remove(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      return true;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        if (current.next) current.next.prev = current.prev;
        if (current.prev) current.prev.next = current.next;
        if (current === this.tail) this.tail = current.prev;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }
}
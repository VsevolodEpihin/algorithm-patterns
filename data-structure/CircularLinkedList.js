class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  get(index) {
    if (!this.head) return null;
    let current = this.head;
    let count = 0;
    do {
      if (count === index) return current.value;
      current = current.next;
      count++;
    } while (current !== this.head);
    return null;
  }

  update(index, value) {
    if (!this.head) return false;
    let current = this.head;
    let count = 0;
    do {
      if (count === index) {
        current.value = value;
        return true;
      }
      current = current.next;
      count++;
    } while (current !== this.head);
    return false;
  }

  remove(index) {
    if (!this.head) return false;
    let current = this.head;
    let previous = null;
    let count = 0;
    do {
      if (count === index) {
        if (previous) {
          previous.next = current.next;
        } else {
          let tail = this.head;
          while (tail.next !== this.head) {
            tail = tail.next;
          }
          this.head = current.next;
          tail.next = this.head;
        }
        return true;
      }
      previous = current;
      current = current.next;
      count++;
    } while (current !== this.head);
    return false;
  }
}
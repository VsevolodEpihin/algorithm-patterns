class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = { value, next: null };
    if(!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    let count = 0;
    let current = this.head;

    while(current) {
      if(count === index) return current.value;
      current = current.next
      count++;
    }
    return null;
  }

  update(index, value) {
    let count = 0;
    let current = this.head;

    while(current) {
      if( index === count ) {
        current.value = value;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }

  remove(index) {
    if(index === 0 && this.head) {
      this.head = this.head.next;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (current) {
      if(count === index) {
        previous.next = next;
        return true
      }
      previous = current;
      current = current.next;
      count++;
    }
    return false;
  }
}
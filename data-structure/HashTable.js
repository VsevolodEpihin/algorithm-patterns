class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          if (bucket.length === 0) {
            this.table[index] = undefined;
          }
          return true;
        }
      }
    }
    return false;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(`Index ${i}:`, this.table[i]);
      }
    }
  }
}

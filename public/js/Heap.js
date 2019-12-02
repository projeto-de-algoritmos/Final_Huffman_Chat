class Heap {
  constructor(topFn) {
    this.topFn =
      topFn ||
      function(element) {
        return element;
      };
    this.items = [];
  }

  swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  bubble(i) {
    let parent = ~~((i - 1) / 2);
    if (this.item(parent) < this.item(i)) {
      this.swap(i, parent);
      this.bubble(parent);
    }
  }

  item(i) {
    return this.topFn(this.items[i]);
  }

  pop() {
    return this.items.pop();
  }

  shift(i, end) {
    let child = i * 2 + 1;
    if (child < end) {
      if (child + 1 < end && this.item(child + 1) > this.item(child)) child++;
      if (this.item(i) < this.item(child)) {
        this.swap(i, child);
        return this.shift(child, end);
      }
    }
  }

  push() {
    let lastIndex = this.items.length;
    for (let i = 0; i < arguments.length; i++) {
      this.items.push(arguments[i]);
      this.bubble(lastIndex++);
    }
  }

  get length() {
    return this.items.length;
  }
}

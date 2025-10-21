export function counter() {
  if (counter.prototype.instance) {
    return counter.prototype.instance;
  } else {
    this.counter = 1;
    counter.prototype.instance = this;
  }
}

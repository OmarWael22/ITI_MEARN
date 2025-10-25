import { Iterator } from "./iterator.js";

export class FriendsIterator extends Iterator {
  constructor(friends, type) {
    super();
    this.friends = friends.filter((f) => f.type === type);
    this.index = 0;
  }

  hasNext() {
    return this.index < this.friends.length;
  }

  next() {
    return this.hasNext() ? this.friends[this.index++] : null;
  }
}

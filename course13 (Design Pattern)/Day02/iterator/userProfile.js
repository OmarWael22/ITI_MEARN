import { FriendsIterator } from "./frienditerator.js";

// Aggregate class
export class UserProfile {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }

  addFriend(friendName, type) {
    this.friends.push({ name: friendName, type }); // type = 'close' | 'coworker' | 'family'
  }

  createIterator(type) {
    return new FriendsIterator(this.friends, type);
  }
}

import { UserProfile } from "./userProfile.js";



// Client code
const user = new UserProfile("Omar");

user.addFriend("Ahmed", "close");
user.addFriend("Sara", "coworker");
user.addFriend("Ali", "family");
user.addFriend("Mona", "close");

const closeFriendsIterator = user.createIterator("close");
console.log("Close Friends:");
while (closeFriendsIterator.hasNext()) {
  console.log(" - " + closeFriendsIterator.next().name);
}

const coworkersIterator = user.createIterator("coworker");
console.log("Coworkers:");
while (coworkersIterator.hasNext()) {
  console.log(" - " + coworkersIterator.next().name);
}

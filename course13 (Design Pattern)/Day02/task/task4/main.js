import { Book } from "./book.js";
import { Box } from "./box.js";


// Client code
const b1 = new Book("Software Architec", 400);
const b2 = new Book("React Mastery", 350);
const b3 = new Book("Clean Code", 500);

const box1 = new Box("Programming Box");
box1.add(b1);
box1.add(b2);

b1.show()
b2.show()
box1.show()

console.log(`\nTotal pages in box: ${box1.getPages()}`);

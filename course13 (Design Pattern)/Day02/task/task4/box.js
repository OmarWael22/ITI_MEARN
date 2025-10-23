import { Item } from "./item.js";

export class Box extends Item {
    constructor(name) {
        super();
        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    show(indent = 0) {
        console.log(`${" ".repeat(indent)}Box: ${this.name}`);
        this.items.forEach((item) => item.show(indent + 2));
    }

    getPages() {
        return this.items.reduce((total, item) => total + item.getPages(), 0);
    }
}

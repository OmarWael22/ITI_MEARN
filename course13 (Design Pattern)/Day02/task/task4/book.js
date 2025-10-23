import { Item } from "./item.js";

export class Book extends Item {
    constructor(title, pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    show(indent = 0) {
        console.log(
        `${" ".repeat(indent)}Book: ${this.title} (${this.pages} pages)`
        );
    }

    getPages() {
        return this.pages;
    }
}

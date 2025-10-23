import { InProgressState } from "./inprogress.js";

export class ToDoItem {
    constructor(name) {
        this.name = name;
        this.state = new InProgressState(); 
    }

    setState(state) {
        this.state = state;
    }

    next() {
        this.state.next(this);
    }

    previous() {
        this.state.previous(this);
    }

    showState() {
        console.log(`Current state of "${this.name}": ${this.state.getName()}`);
    }
}

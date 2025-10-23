export class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    getInfo() {
        return `${this.name} teaches ${this.subject}`;
    }
}
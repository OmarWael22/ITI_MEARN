export class TeacherDecorator {
    constructor(teacher) {
        this.teacher = teacher;
    }

    getInfo() {
        return this.teacher.getInfo();
    }
}
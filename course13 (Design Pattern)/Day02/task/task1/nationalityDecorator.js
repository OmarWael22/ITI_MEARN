import { TeacherDecorator } from "./teacherDecorator.js";
export class NationalityDecorator extends TeacherDecorator {
  constructor(teacher, nationality) {
    super(teacher)
    this.nationality = nationality;
  }

  getInfo() {
    return `${super.getInfo()}, Nationality: ${this.nationality}`;
  }
}
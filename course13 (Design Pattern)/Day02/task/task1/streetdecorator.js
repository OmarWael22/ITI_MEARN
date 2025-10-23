import { TeacherDecorator } from "./teacherDecorator.js";
export class StreetDecorator extends TeacherDecorator {
  constructor(teacher, street) {
	super(teacher)
    this.street = street;
  }

  getInfo() {
    return `${super.getInfo()}, Street: ${this.street}`;
  }
}
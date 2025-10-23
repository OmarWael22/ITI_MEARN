import { TeacherDecorator } from "./teacherDecorator.js";
export class SalaryDecorator extends TeacherDecorator {
  constructor(teacher, salary) {
    super(teacher)
    this.salary = salary;
  }

  getInfo() {
    return `${super.getInfo()}, Salary: ${this.salary}`;
  }
}
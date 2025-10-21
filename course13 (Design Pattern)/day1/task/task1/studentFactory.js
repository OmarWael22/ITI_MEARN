import { BoyStudent } from "./boystudent.js";
import { GirlStudent } from "./girlstudent.js";
export function StudentFactory() {
  this.createStudent = function (gender) {
    if (gender === "male") return new BoyStudent();
    else return new GirlStudent();
  };
}

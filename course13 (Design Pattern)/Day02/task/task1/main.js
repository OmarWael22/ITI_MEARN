import { Teacher } from "./teacher.js";
import { SalaryDecorator } from "./salayDecorator.js";
import { NationalityDecorator } from "./nationalityDecorator.js";
import { StreetDecorator } from "./streetdecorator.js";

let teacher = new Teacher("Omar", "Math");

teacher = new SalaryDecorator(teacher, 5000);
teacher = new NationalityDecorator(teacher, "Egyptian");
teacher = new StreetDecorator(teacher, "Tahrir Street");

console.log(teacher.getInfo());

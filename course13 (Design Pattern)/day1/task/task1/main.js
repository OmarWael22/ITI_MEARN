import { StudentFactory } from "./studentFactory.js"; 
const factory = new StudentFactory();
const boy = factory.createStudent('male');
console.log(boy.gender);
const girl = factory.createStudent('female');
console.log(girl.gender);
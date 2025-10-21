import { BoyStudent, GirlStudent } from "./task1.supp.js";
function StudentFactory(){
    this.createStudent =  function(gender){
        if(gender === 'male')
            return new BoyStudent();
        else
            return new GirlStudent();
    }
}
const factory = new StudentFactory();
const boy = factory.createStudent('male');
console.log(boy.gender);
const girl = factory.createStudent('female');
console.log(girl.gender);
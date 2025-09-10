export { Employee ,Manager ,WorkerBee,SalesPerson,Engineer}
/* 1 */
class Employee{
    constructor(name="",department="general"){
        this.name = name;
        this.dept = department
    }
} 
// emp1 = new Employee();
// console.log(emp1);
class Manager extends Employee{
    constructor(name,department,reports=[]){
        super(name,department);
        this.reports = reports
    }
}
// mng1 = new Manager();
// console.log(mng1);
class WorkerBee extends Employee{
    constructor(name,department,projects=[]){
        super(name,department);
        this.projects = projects;
    }
}
class SalesPerson extends WorkerBee{
    constructor(name,projects,quota=100){
        super(name,projects);
        this.quota = quota;
        this.dept = "sales"
    }
}
// s1 = new SalesPerson()
// console.log(s1);
class Engineer extends WorkerBee{
    constructor(name,projects,machine=""){
        super(name,projects);
        this.dept = "Engineering";
        this.machine = machine;
    }
}
// e1 = new Engineer()
// console.log(e1);
interface IGeo {
    lat: string,
    lng : string
}
interface IAddress{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo:IGeo
}
interface IEmployee{
    readonly id: number | string,
    name: string,
    email:string
}
class Employee implements IEmployee{
    readonly id: number | string;
    name: string;
    private username: string;
    email: string;
    protected address: IAddress;
    private static instanceCreated = 0;
    constructor(id: number | string,name:string,username:string,email:string,address:IAddress) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        Employee.instanceCreated++;
    }
    get userName(): string{
        return this.username
    }
    static getInstanceCount(): number{
        return this.instanceCreated;
    }
    
};

const emp1 = new Employee(1, "Leanne Graham", "Bret","Sincere@april.biz", {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "37.3159", lng: "81.1496" }
});
console.log(emp1);
console.log(Employee.getInstanceCount());
console.log(emp1.userName);
console.log("***********************");
/****************************************************************** */
class Manager extends Employee{
    constructor(id: number | string,name:string,username:string,email:string,address:IAddress) {
        super(id,name,username,email,address)
    }
    displayAddress():void {
        console.log(this.address);
    }
}
const manager1 = new Manager(2, "John Doe", "JDoe", "john@company.com", {
    street: "Main St",
    suite: "Office 101",
    city: "Metropolis",
    zipcode: "12345",
    geo: { lat: "40.1234", lng: "50.5678" }
});

console.log(manager1);
manager1.displayAddress();
console.log("***********************************");
/************************************************************************ */

function UserLog(constructor: Function) {
    const createdAt = new Date();
    console.log(`Class ${constructor.name} created at: ${createdAt}`);
}
@UserLog
class User {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name,
        this.email = email
    }
}
const user1 = new User("omar", "omarwael@gmail.com")
console.log("*****************************");
/***************************************************************** */
import { MathOperations } from "./math";

console.log(MathOperations.add(5, 10)); // 15
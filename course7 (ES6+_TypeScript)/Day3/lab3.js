/* 1 */
import { Employee,WorkerBee,Manager,SalesPerson,Engineer } from "./lab3_mod.js";
let emp1 = new Employee();
console.log(emp1);



let manger1 = new Manager()
console.log(manger1);

let Worker1 = new WorkerBee();
console.log(Worker1);

let sales1 = new SalesPerson();
console.log(sales1);

let eng1 = new Engineer();
console.log(eng1);

manger1.reports.push(eng1);
console.log(manger1);

/* 2 */

async function getUserData(){
    let res= await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json();
    // console.log(data);
    return data;
}
let allUsers = await getUserData();
console.log(allUsers);

let userPosts = {};
async function getUserPosts(usersdata){
    for (const user of usersdata) {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        let data = await res.json();
        userPosts[user.id]  = data
    }
}
await getUserPosts(allUsers);
console.log(userPosts);


for (const user of allUsers) {
    let myDiv = document.createElement("div");
    myDiv.innerHTML = user.name;
    let myOL = document.createElement("ol")

    let key = user.id;
    for (const post of userPosts[key]) {
            let myli = document.createElement("li");
            myli.innerHTML = post.title;
            myOL.appendChild(myli);
        }
        myDiv.appendChild(myOL)
        document.body.appendChild(myDiv)
}



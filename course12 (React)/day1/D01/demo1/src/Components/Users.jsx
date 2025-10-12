import { useState } from "react";
import User from "./user";

const Users = () => {

   let [usersData] = useState([
    {id:1, name:"Ahmed", age:8},
    {id:2, name:"Aya", age:25},
    {id:3, name:"Omar", age:33},
    {id:4, name:"Fatma", age:55},
    {id:5, name:"Nader", age:15},
    {id:6, name:"Hamza", age:6},
   ])

  //  console.log(x)
   
  return (
    <>
      {/* {usersData.map((usr)=> <User userName="Mohamed"></User> )} */}
      {/* {usersData.map((usr)=> <User id={usr.id} name={usr.name} age={usr.age}></User> )} */}
      {usersData.map((usr)=> <User {...usr}></User> )}
    </>
  );
}

export default Users;

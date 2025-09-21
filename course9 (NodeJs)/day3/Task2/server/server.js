// module.exports = { calc: new Calc() };
// all module will get the same instance as the module.export run once and cache the result of the require
const http = require("node:http")
const fs = require("node:fs")
const path = require("path")
const portNumber = 7000;
//  new exports = 
const express = require("express");
const app = express()
// init live server 
app.listen(portNumber,()=>{
    console.log("Listening on port 7000");
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get(["/","/main.html"],(req,res)=>{
    let relative = "../client/index.html"
    let absolute = path.join(__dirname,relative)
    res.sendFile(absolute)
})

app.get("/css/main.css",(req,res)=>{
    let relative = "../client/css/main.css"
    let absolute = path.join(__dirname,relative)
    res.sendFile(absolute)
})

app.get("/js/main.js",(req,res)=>{
    let relative = "../client/js/main.js"
    let absolute = path.join(__dirname,relative)
    res.sendFile(absolute)
})

app.get("/users",(req,res)=>{
    let relative = "./users.json"
    let absolute = path.join(__dirname,relative)
    console.log(absolute);
    res.sendFile(absolute)
})
let id = 0
app.post("/welcome.html",(req,res)=>{
    let {username,mobile,email,address} = req.body;
    // console.log(req.body);
    htmlPage = fs.readFileSync("../client/welcome.html","utf-8");
    updateJsonFile({id,username,mobile,email,address})
    htmlPage = htmlPage.replace("{username}",username );
    htmlPage = htmlPage.replace("{mobilenumber}",mobile );
    htmlPage = htmlPage.replace("{address}", address);
    htmlPage = htmlPage.replace("{email}", email);
    id++;
    res.send(htmlPage);
})

app.all("*not",(req ,res)=>{
    res.send("<h3>Not Found !</h3>")
})
// const server = http.createServer((req , res)=>{
//     // handling get req
//     if(req.method === "GET"){
//        
//     // handling post req
//     else if(req.method === "POST"){
//       

function updateJsonFile(obj){
    if(fs.existsSync("users.json")){
        fs.readFile("users.json","utf-8",(err ,data)=>{
            users = JSON.parse(data)
            obj.id = users.length + 1;
            users.push(obj)
            fs.writeFile("users.json",JSON.stringify(users),(err)=>{
                if (err) throw err
            })
        })
    }
    else{
        obj.id = 0
        fs.writeFile("users.json",JSON.stringify([obj]),(err)=>{
            if(err) throw err;
        })
    }
}
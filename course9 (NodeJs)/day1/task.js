const http  = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");
const { stringify } = require("querystring");

const server = http.createServer();
server.listen(8080 , ()=>{
    console.log("listening port 8080");
})
server.on("request", (req,res)=>{
    console.log("**********");
    let reqURL = req.url;
    if (reqURL === "/favicon.ico") {
        res.writeHead(204); // 204 = No Content
        res.end();
        return;
    }
    let result = proccessRequest(reqURL);
    res.write(result)
    res.end()
})
function proccessRequest(reqURL){
    let argArr = reqURL.split("/")
    argArr.shift()
    let [operation , ...operands] = argArr
    let numOperands = operands.map((ele) => parseInt(ele));
    let result = calculator(operation,numOperands)
    let myObj =  createJsonObj(operation,operands,result);
    let strObj = JSON.stringify(myObj)
    fs.writeFile("result.json",strObj,(err)=>{
        if(err)
            console.log(err);
    })
    return strObj;
}
function calculator(operation , arr){
    let res = 0 ;
    switch (operation){
        case "add":
            res = arr.reduce((a,b)=> a+b);
            break;
        case "sub":
            res = arr.reduce((a,b)=> a-b);
            break;
        case "mul":
            res = arr.reduce((a,b)=> a*b);
            break;
        case "div":
            res = arr.reduce((a,b)=> a/b);
            break;
    }
    return res;
}
// console.log(calculator("div",[20,10,2]));
function createJsonObj(operation,operands,result){
    let myjson = {
        operation,
        values:operands,
        result
    }
    return myjson;
}
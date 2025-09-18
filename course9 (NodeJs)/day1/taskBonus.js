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
    argArr.shift();
    steps = []
    let currResult = null;
    let i = 0;
    // add , 1 , 5 , sub ,3 ,mul,2
    while(i<argArr.length){
        let prevres = currResult
        operation = argArr[i];
        i++;
        operands = [];
        while(i<argArr.length && !isNaN(argArr[i]) ){
            operands.push(parseInt(argArr[i]));
            i++;
        }
        if(currResult == null){
            currResult = calculator(operation,operands)
            steps.push({operation , operands , result:currResult})
        }
        else{
            currResult = calculator(operation,[currResult,...operands])
            steps.push({operation , values:[prevres , ...operands] ,result : currResult,})
        }
    }
    steps.push({finalResult : currResult});
    console.log(steps);
    let strObj = JSON.stringify(steps)
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

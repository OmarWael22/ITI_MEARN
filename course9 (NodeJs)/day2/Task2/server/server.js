// module.exports = { calc: new Calc() };
// all module will get the same instance as the module.export run once and cache the result of the require
const http = require("node:http")
const fs = require("node:fs")
const portNumber = 7000;
//  new exports = 

// init live server 
const server = http.createServer((req , res)=>{
    // handling get req
    if(req.method === "GET"){
        console.log(req.url);
        switch(req.url){
            case "/":
            case"/main.html":
            let htmlPage = fs.readFileSync("../client/index.html")
                res.setHeader("content-type","text/html")
                res.write(htmlPage);
                break;
            case "/css/main.css":
                let cssFile = fs.readFileSync("../client/css/main.css");
                res.setHeader("content-type","text/css")
                res.write(cssFile);
                break;
            case "/js/main.js":
                let jsFile = fs.readFileSync("../client/js/main.js");
                res.setHeader("content-type","text/javascript")
                res.write(jsFile);
                break;
            case "/users":
                let jsonFile = fs.readFileSync("users.json");
                res.setHeader("content-type","application/json")
                res.write(jsonFile)
                break;
            default:
                res.writeHead(404)
                res.write("Not Found !")
        }
        res.end()
    }
    // handling post req
    else if(req.method === "POST"){
        console.log(req.url);
        switch(req.url){
            case "/welcome.html":
                let htmlPage = "";
                req.on("data", (data) => {
                    htmlPage = fs.readFileSync("../client/welcome.html","utf-8");
                    const params = new URLSearchParams(data.toString());
                    let userName = params.get("username")
                    let mobileNumber = params.get("mobile")
                    let email = params.get("email")
                    let address = params.get("address")
                    // add the data  to jsonfile
                    updateJsonFile({userName,mobileNumber,email,address})
                    // update html file
                    htmlPage = htmlPage.replace("{username}",userName );
                    htmlPage = htmlPage.replace("{mobilenumber}",mobileNumber );
                    htmlPage = htmlPage.replace("{address}", address);
                    htmlPage = htmlPage.replace("{email}", email);
                    // console.log(data.toString());
                });
                req.on("end", () => {
                    res.setHeader("content-type", "text/html");
                    res.write(htmlPage);
                    res.end();
                });
                break;

        }

    }
}).listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})

function updateJsonFile(obj){
    if(fs.existsSync("users.json")){
        fs.readFile("users.json","utf-8",(err ,data)=>{
            users = JSON.parse(data)
            users.push(obj)
            fs.writeFile("users.json",JSON.stringify(users),(err)=>{
                if (err) throw err
            })
        })
    }
    else{
        fs.writeFile("users.json",JSON.stringify([obj]),(err)=>{
            if(err) throw err;
        })
    }
}
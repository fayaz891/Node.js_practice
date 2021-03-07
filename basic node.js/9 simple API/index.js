const fs = require("fs");
const http=require("http");

//only one time req thats why use sync
const data=fs.readFileSync("../index.json", "utf-8","r+");
    const objdata = JSON.parse(data)

const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        res.writeHead(200, {"content-type":"txt/html"});
        res.end("<h2>hello fayaz what are you doing</h2>");
    } else if (req.url=="/contact"){
        res.writeHead(200,{"content-type":"txt/html"});
        res.end("hello from contact");
    }
    else if (req.url == "/api") {
        res.writeHead(200,{"content-type":"application/json"});
        res.end(objdata[1].name);
    }
    else{
        res.end("you enter wrong data");
    };
});

server.listen(8000, "127.0.0.1", () => { console.log("service listened") });
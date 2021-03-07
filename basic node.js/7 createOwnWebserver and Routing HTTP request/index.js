//to access web pages of any web application you need a webserver, the webserver handle all http requests 
//for web application i.e Appache is webserver of PHP

//node.js provides you to create your own websever which handle http request application


//The http.createServer() method must include request and response parameters which will supplied  by node.js
//The request object can used to get information about the current HTTP request e.g url, rquest header and data.
//The response object can be used to sent response for current HTTP request

//if the reponse from HTTP server is supposed to be displayed as HTML, you should include an HTTP header
//with correct content type.



// const http=require("http");
// const server= http.createServer( (req,res)=>{
//  res.end("this is me fayaz");        //this is response
// });

// //this is request to the server 
// server.listen(9000,"127.0.0.1",()=>{
//     console.log("i listened on port no 9000")
// });




//Routing HTTP requests

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url=="/") {
        res.end("hello fayaz rashid");

    } else if(req.url=="/about"){
        res.writeHead(200);
        res.end("you want to search about me");

    } else if(req.url=="/contactUs"){
        res.writeHead(200,{"content-type":"txt/html"});  //200 is successful response code of http
        res.end("you wnat to contact us");
    }
    else{
        res.writeHead(404);  //404 client error code of http status
        res.end("<h1>404 error</h1>'<br>' page does not exist")
    }
});

//this is request to the server 
server.listen(9000, "127.0.0.1", () => {
    console.log("i listened on port no 9000")
});

// "req.url" jo word client search krta hy

 //"res.end" is always must,bc it will end the response
 //"res.writeHead()" it require data http respnose status code and content type


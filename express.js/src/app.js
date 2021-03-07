//here we cannt neeed to creat server or if "req.url" is this then "req.end" that etc,here is everything will shorter

const express= require("express");
const app = express(); 

app.get("/", (req,res)=>{

    //here res.send function use, not res.end
    res.send("hello from express")
});

app.get("/about", (req, res) => {
    res.send("hello from fayaz")
});

app.listen(8000, ()=>{
    console.log("listing")
})
/*callback function has 2 parameters,request(req) and response(res).the req object represent the http request
and has properties for the request of  queryString ,parameters,body,HTTP header etc.

similarly the response object represents the HTTP response that the Express app sends when it recieve an HTTP request
*/

const express=require("express");
const app=express();
const path=require("path");
const port=1000;


const staticPath = path.join(__dirname,"../own prject");
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("hello fayaz again");
});

app.listen(port,console.log("done"));
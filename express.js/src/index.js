const express =require("express");
const app=express();
const path=require("path");

//it will make path of public filder with main folder
//console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

const port=2000;


app.get("/",(req,res)=>{
    res.send()
})

app.listen(port);
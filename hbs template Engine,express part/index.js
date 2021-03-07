const express=require("express");
const app=express();
const path= require("path");
const port=3000;


app.set("view engine","hbs");

app.get("/contact",(req,res)=>{
    res.render("contact",{
        Name:req.params.name,
        FatherName:"M.Rashid",
        Country:"Pakistan",
    })
});
app.get("/",(req,res)=>{
    res.send("hello fayaz");
});

app.listen(port,console.log("done1"));
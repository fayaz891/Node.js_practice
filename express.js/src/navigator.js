const express=require("express");
const app=express();

const port=5000;

//main home page
app.get("/",(req,res)=>{
    res.send("hello fayaz")
})

app.get("/:name", (req, res) => {
    res.send("Your Name is " + req.params.name);  //req.params.id  ,it return id from the req side id entered
})

app.get("/about", (req, res) => {
    res.status(200).send("hello fayaz about")
})

app.get("/contact", (req, res) => {
    res.send("<h2>hello fayaz contact</h2>")
})

app.get("/temp", (req, res) => {
    res.send([
        {
            id:1,
            name:"fayaz",
            number:0304
        },
        {
            id: 1,
            name: "fayaz",
            number: 0304
        },
        {
            id: 1,
            name: "fayaz",
            number: 0304
        }
])
})

//listning server
app.listen(port,console.log("listned"))
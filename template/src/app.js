const express = require('express')
const path = require("path")
const hbs = require("hbs")
require("./db/conn")
const app = express()
const port= process.env.PORT || 4000;

/*setting path*/
//console.log(path.join(__dirname));    to check path
const staticPath = path.join(__dirname,"../public");
// for template folder path
const templatePath = path.join(__dirname, "../templates/views");
// for partials folder path
const partialsPath = path.join(__dirname, "../templates/partials");


/*middleware*/
//make path for bootstrap,js and jquery ,then this /css,/jq ,/js linked in index.hbs
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));


//for static website i.e for public folder index file
app.use(express.static(staticPath))
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


/*routing*/
app.get('/',(req, res)=> {
    res.render("index")
})

app.get('/contact', (req, res) => {
    res.render("contact")
})

app.get('/service', (req, res) => {
    res.render("service")
})

app.get('/gallery', (req, res) => {
    res.render("gallery")
})

app.get('/about', (req, res) => {
    res.render("about")
})


//server created
app.listen(port ,() =>{
    console.log("server listned")});
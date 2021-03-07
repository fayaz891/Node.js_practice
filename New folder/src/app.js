 const express = require('express')

 //we add students collection models
 const student = require("./models/students");

//we required conn.js model
require("./db/conn");


const app = express();
const port = process.env.PORT || 3000 ;

//middlewares ,it convert json file which entered in postman into object
app.use(express.json());



app.get('/', function (req, res) {
    res.send('Hello World')
})

//promises

// app.post('/students', function (req, res) {
//     const student = new student(req.body)
//     student.save().then(()=>{
//         res.status(201).send(student)
//     }).catch((e)=>{
//         res.send(e)
//     })
// })


//async await ,post data

app.post("/students",async(req,res)=>{
try {
    const user = new student(req.body)

    const createUser = await user.save();
    res.status(200).send(createUser);
} catch (error) {
    res.status(400).send(error)
}
})

//read data
app.get("/students",async (req,res)=>{
    try {
        const studentsdata = await student.find();
        res.status(200).send(studentsdata);
    } catch (error) {
        res.send(eror)
    }
});

//read individal data
app.get("/students/:id", async (req,res)=>{
    try {
        const _id=req.params.id;
        const studentupdate=await student.findById(_id);
        res.send(studentupdate);
    } catch (error) {
        res.send(eror);  
    }
});

//patch data
app.patch("/students/:id",async (req, res) => {
    try {
        const _id = req.params.id;
        const studentdata = await student.findByIdAndUpdate(_id,
            req.body,{new:true});
        res.send(studentdata);
    } catch (error) {
        res.send(eror);
    }
});

//put data
app.put("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentdata = await student.findByIdAndUpdate(_id,
            req.body, { new: true });
        res.send(studentdata);
    } catch (error) {
        res.send(eror);
    }
});

//delete data
app.delete("/students/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const studentdelete = await student.findByIdAndDelete(name);
        res.send(studentdelete);
    } catch (error) {
        res.send(eror);
    }
});

app.listen(port, ()=>{
    console.log(`connection listened at ${port}`)
});
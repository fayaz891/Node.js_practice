const mongoose = require('mongoose');

 mongoose.connect("mongodb://localhost:27017/studentsapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:true
})
.then(()=>{console.log("success");})
.catch((e)=>{console.log("error");})



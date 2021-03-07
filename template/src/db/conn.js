const mongoose = require('mongoose');

//creating database
mongoose.connect('mongodb://localhost/noded', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("database successed ");
}).catch((e)=>{
    console.log(e);
})
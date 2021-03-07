const mongoose = require('mongoose');

var validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {type:String,
           require:true},
    Email:{type:String,
           require:true,
        unique:[true,"email present already"],
       Validate(value){
           if(!validator.isEmail(value)){
               throw new error("error")}
       }},
    phone:{type:Number,
          min:5,
        required:true,
    unique:true},   
    body: String
},
{
    timestamps:{createdAt:true, updatedAt:false}
});

//create new collection
const student=new mongoose.model("student",studentSchema);

module.exports = student;
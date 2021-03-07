const mongoose = require('mongoose');


const regSchema = new mongoose.Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

const Register = mongoose.model('Register', regSchema)
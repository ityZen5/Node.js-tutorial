const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bharathrm:yio9lZphbddNPDnR@cluster0.h9kdt.mongodb.net/")
    .then(() => console.log("database connected succefully"))
    .catch((e) => console.log(e)); 

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number, 
    isActive : Boolean, 
    tags : [Strings],
    createdAt : {type : Date, default : Date.now}
})


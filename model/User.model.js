const { mongoose } = require('mongoose')
const mongooes=require('mongoose')
const userSchema=mongooes.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
})
const userModel=mongoose.model("users",userSchema);
module.exports=userModel
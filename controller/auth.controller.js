const userModel= require('../model/User.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
exports.loginClient=async(req,res)=>{
    const {phone,password}=req.body;
    if(!phone || !password)
        res.status(403).end("Input Requrired data!")

    try {
        const user= await userModel.findOne({phone});
        if(!user) res.end("User does not exist!!");
        const isPassword=bcrypt.compare(password,user.password)
        if(!isPassword)
        {
            res.status(403).send("Password is wrong!!");
            return; 
        }
       const token= jwt.sign({id:user._id},process.env.JWT_SECRATE)
       res.cookie("access_token",token,{httpOnly:true}).status(200).json({
        message:"Login in",
        token
    })
        
    } catch (error) {
       res.status(401).send(error.message) 
    }
}

exports.signUpClient=async(req,res)=>{
    const {password,name,phone}=req.body;
    try {
        const hashedPassword= await bcrypt.hash(password,10);
        const data= new userModel({password:hashedPassword,name,phone})
        await data.save();
        res.status(200).send("SignUp successfully !!") 
    } catch (error) {
       res.status(401).send(error.message) 
    }
}
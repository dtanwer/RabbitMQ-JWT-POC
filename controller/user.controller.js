const userModel= require('../model/User.model')

exports.getAllClientData=async(req,res)=>{
    try {
        const users=await userModel.find()
        res.status(200).send(users) 
    } catch (error) {
       res.status(401).send(error.message) 
    }
}
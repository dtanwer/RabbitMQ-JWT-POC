const express=require('express')
const router=express.Router();
const {signUpClient,loginClient} = require('../controller/auth.controller')

router.post('/login',loginClient)
router.post('/signup',signUpClient)

module.exports=router
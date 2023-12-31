const jwt=require('jsonwebtoken');
exports.verifyToken=(req,res,next)=>{
    // const token= req.headers.authorization;
    const token=req.cookies.access_token;
    if(token)
    {
          jwt.verify(token,process.env.JWT_SECRATE,(err)=>{
                if(err) return res.sendStatus(403);
                next();
          });
    }
    else{
          res.sendStatus(401);
    }
}

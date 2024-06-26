const express= require("express");
const passport = require("passport");
const authorize=(req,res,next)=>{
    passport.authenticate("jwt",{session:false},(err,user)=>{
        if (!user || err) {
            res.status(401).json({msg:"Unathorized"})
        }else{
            req.user=user;
        }
    })(req,res,next)
}
module.exports=authorize;
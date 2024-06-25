// import * as dotenv from 'dotenv'
const dotenv=require("dotenv")
dotenv.config()
const passportJWT=require("passport-jwt")
const passport=require("passport")
const {db}= require("../data/controllers/userscontrollers")
const{SECRET=""}=process.env;

module.exports=function(passport){
    passport.use(
        new passportJWT.Strategy({
            secretOrKey: SECRET,
            jwtFromRequest : passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        },async (payload,done)=>{
            const user=db.one(`SELECT * FROM users WHERE id=$1`, payload.id)
            console.log(user);
            try{
                return user ? done(null,user) : done (new Error("User not found"));
            } catch(error){
                done(error);
            }
        })
    )
}



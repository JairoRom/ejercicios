const express=require("express");
const router= express.Router();
const userscontroller=require("../controllers/userscontrollers");
const  authorize = require("../authorize");


router.post("/api/users/login", userscontroller.logIn)

router.post("/api/users/signup", userscontroller.signUp)

router.get("/api/users/logout",authorize,userscontroller.logOut)


module.exports= router;
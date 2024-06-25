const express=require("express")
const dotenv=require("dotenv")
const morgan = require("morgan")
const routes= require("./routes/main")
const passport = require("passport")



let planet={
    id:1,
    name:"mars"
}

dotenv.config()
const PORT=process.env.PORT || 3000;

const app=express()
app.use(express.json())
app.use(morgan("combined"))


require("./password")(passport);
app.use(passport.initialize());


app.get("/",(req,res)=>{
    res.json(planet)

})
app.get("/ruta",(req,res)=>{
    res.send("otra ruta")
})

app.use(routes)

app.listen(PORT,()=>{
    console.log("Welcome",`http://localhost:${PORT}`);
})
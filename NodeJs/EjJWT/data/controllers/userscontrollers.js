// import * as dotenv from 'dotenv'
const dotenv=require("dotenv");
dotenv.config()
let users=require("../planets/users.json");
const jwt= require("jsonwebtoken")
const pgPromise=require("pg-promise");

const db= pgPromise()("postgres://postgres:postgres@localhost:5432/postgres")
module.exports={db};

const setupDb= async ()=>{
    await db.none(`
        DROP TABLE IF EXISTS users;
        CREATE TABLE users
        (id SERIAL PRIMARY KEY,
        username VARCHAR(20) NOT NULL,
        password TEXT,
        token TEXT
        );`)
        await db.none(`
            INSERT INTO users (username,password) VALUES ('Ocho','123');
            INSERT INTO users (username) VALUES ('Albaricoque');` )
        const users= await db.many(`SELECT * FROM users`);
        console.log(users);
}
setupDb();

const userscontroller={
    
    logIn: async (req,res)=>{
        const {name,password}=req.body;
        const user =db.one(`SELECT * FROM users WHERE username=$1`,name);
        if (user && user.password ===password) {
            const payload={ 
                id: user.id,
                name,
            }
            const {SECRET=""}=process.env
            const token= jwt.sign(payload, SECRET);

            await db.none(`UPDATE user SET toke=$2 WHERE id=$1`,[user.id,token])
            res.status(200).json({id: user.id,name,token})
        }else{
            res.status(400).json({msg:"Username or password incorrect"})
        }
    },
    signUp: async (req,res)=>{
        const{username,password}=req.body;
        const user=db.oneOrNone(`SELECT * FROM users WHERE username=$1`,username);

        if (user !==null) {
            res.status(400).json({msg: "User already exists"})
        }else{
            const newUser=await db.one(`INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id`,[username,password]
            );
            res.status(201).json({id:newUser,msg: "Success"});
        }
    },
    logOut: async (req,res)=>{
        const user=req.user;
        if (user) {
            await db.none(`UPDATE users SET token=$2 WHERE id=$1`,[user?.id, null])
            res.status(200).json({msg:"Successfully log out"})
        } else{
            res.status(400).json({msg:"Not authenticated"})
        }
        
    }
}
module.exports=userscontroller;
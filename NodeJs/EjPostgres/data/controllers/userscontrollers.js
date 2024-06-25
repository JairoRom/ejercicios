let users=require("../planets/users.json");

const pgPromise=require("pg-promise");

const db= pgPromise()("postgres://postgres:postgres@localhost:5432/postgres")

const setupDb= async ()=>{
    await db.none(`
        DROP TABLE IF EXISTS users;
        CREATE TABLE users
        (id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        password TEXT
        );`)
        await db.none(`
            INSERT INTO users (name,password) VALUES ('Ocho','123');
            INSERT INTO users (name) VALUES ('Albaricoque');` )
        const users= await db.many(`SELECT * FROM users`);
        console.log(users);
}
setupDb();

const userscontroller={
    getusers: async (req,res)=>{
        const users= await db.many(`SELECT * FROM users`)
        res.status(200).json(users)
    },
    getPlanId: async (req,res)=>{
        const id=req.params.id;
        const planet= await db.one(`SELECT * FROM users WHERE id=${id};`)
        res.status(200).json(planet)
    },
    postusers:(req,res)=>{
        const newName =req.body.name;

        db.none(`INSERT INTO users (name) VALUES ('${newName}')`)

        users= [...users,newPlanet]
        res.status(201).json({msg:"sucess",data:users})
    },
    putPlanetId: async(req,res)=>{
        const {id} =req.params;
        const newName=req.body.name;
        await db.none(`UPDATE users SET name=$2 WHERE id=$1 `,[id,newName])
        res.status(200).json({msg:"sucess",data:newName})
    },
    deletePlanet:(req,res)=>{
        const {id} =req.params
        db.none("DELETE FROM users WHERE id=$1",id)
        res.status(200).json({msg:"sucess",data:users})
    },
    uploadImage: async(req,res)=>{
        console.log(req);
        res.status(200).send("Ok")

        const img= req.file.path
        await db.none(`UPDATE users SET image=$2 WHERE id=$1`,[id, img])
    }
}
module.exports=userscontroller;
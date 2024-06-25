let planets=require("../planets/planets.json");
const pgPromise=require("pg-promise");

const db= pgPromise()("postgres://postgres:postgres@localhost:5432/postgres")

const setupDb= async ()=>{
    await db.none(`
        DROP TABLE IF EXISTS planets;
        CREATE TABLE planets
        (id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        image TEXT);`)
        await db.none(`
            INSERT INTO planets (name) VALUES ('Earth');
            INSERT INTO planets (name) VALUES ('Albaricoque');` )
        const planets= await db.many(`SELECT * FROM planets`);
        console.log(planets);
}
setupDb();

const mainController={
    getPlanets: async (req,res)=>{
        const planets= await db.many(`SELECT * FROM planets`)
        res.status(200).json(planets)
    },
    getPlanId: async (req,res)=>{
        const id=req.params.id;
        const planet= await db.one(`SELECT * FROM planets WHERE id=${id};`)
        res.status(200).json(planet)
    },
    postPlanets:(req,res)=>{
        const newName =req.body.name;

        db.none(`INSERT INTO planets (name) VALUES ('${newName}')`)

        planets= [...planets,newPlanet]
        res.status(201).json({msg:"sucess",data:planets})
    },
    putPlanetId: async(req,res)=>{
        const {id} =req.params;
        const newName=req.body.name;
        await db.none(`UPDATE planets SET name=$2 WHERE id=$1 `,[id,newName])
        res.status(200).json({msg:"sucess",data:newName})
    },
    deletePlanet:(req,res)=>{
        const {id} =req.params
        db.none("DELETE FROM planets WHERE id=$1",id)
        res.status(200).json({msg:"sucess",data:planets})
    },
    uploadImage: async(req,res)=>{
        console.log(req);
        res.status(200).send("Ok")

        const img= req.file.path
        await db.none(`UPDATE planets SET image=$2 WHERE id=$1`,[id, img])
    }
}
module.exports=mainController;
let planets=require("../planets/planets.json");

const pgPromise=require("pg-promise");

const db= pgPromise()("postgres://postgres:postgres@localhost:5432/postgres")

const setupDb= async ()=>{
    await db.none(`
        CREATE TABLE planets
        (id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL);`)
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
    putPlanetId:(req,res)=>{
        const {id} =req.params;

        const newName=req.body.name;
        planets = planets.map((planet)=>{
            if (planet.id==id) {
                return {...planet, name:newName}
            }
            return planet
        })
        res.status(200).json({msg:"sucess",data:planets})
    },
    deletePlanet:(req,res)=>{
        const {id} =req.params


        db.none("DELETE FROM planets WHERE id=$1",id)
        res.status(200).json({msg:"sucess",data:planets})
    }
}
module.exports=mainController;
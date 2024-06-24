let planets=require("../planets/planets.json");
const Joi=require("joi");
const planetsSchema=Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
})

const mainController={
    getPlanets:(req,res)=>{
        res.status(200).json(planets)
    },
    getPlanId:(req,res)=>{
        const id=req.params.id;
        const planet=planets.find(planet=>planet.id ==Number(id))
        res.status(200).json(planet)
    },
    postPlanets:(req,res)=>{
        const newName =req.body.name;
        const length= planets.length +1;
        const newPlanet={
            id:length,
            name:newName
        }
        const validation=planetsSchema.validate(newPlanet)
        if (validation.error) {
            return res.status(400).json({
                msg: validation.error.message
            })
        }
        // planets.push({
        //     id:length,
        //     name:newName
        // })
        planets= [...planets,newPlanet]
        res.status(201).json({msg:"sucess",data:planets})
    },
    putPlanetId:(req,res)=>{
        const {id} =req.params;
        // const planet =planets.find(planet => planet.id ===Number(id));
        // planet.name=req.body.name;
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
        const planets =planets.filter(planet => planet.id !==Number(id))
        res.status(200).json({msg:"sucess",data:planets})
    }
}
module.exports=mainController;
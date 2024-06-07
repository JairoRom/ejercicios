const express=require("express");
const router= express.Router();
let planets=require("../data/planets/planets.json")

router.get("/api/planets", (req,res)=>{
    res.status(200).json(planets)
})

router.get("/api/planets/:id",(req,res)=>{
    const id=req.params.id;
    const planet=planets.find(planet=>planet.id ==Number(id))
    res.status(200).json(planet)
})

router.post("/api/planets",(req,res)=>{
    const newName =req.body.name;
    const length= planets.length +1;
    planets.push({
        id:length,
        name:newName
    })
    res.status(201).json({msg:"sucess",data:planets})
})

router.put("api/planets/:id",(req,res)=>{
    const {id} =req.params;
    const planet =planets.find(planter => planet.id ==Number(id));
    planet.name=req.body.name;
    res.status(201).json({msg:"sucess",data:planets})
})

router.delete("api/planets/:id",(req,res)=>{
    const {id} =req.params
    const planets =planets.filter(planet => planet.id !==Number(id))
    res.status(200).json({msg:"sucess",data:planets})
})

module.exports= router;
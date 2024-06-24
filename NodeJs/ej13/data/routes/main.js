const express=require("express");
const router= express.Router();

const mainController=require("../controllers/maincontroller")

router.get("/api/planets",mainController.getPlanets)

router.get("/api/planets/:id",mainController.getPlanId)

router.post("/api/planets",mainController.postPlanets)

router.put("api/planets/:id",mainController.putPlanetId)

router.delete("api/planets/:id",mainController.deletePlanet)

module.exports= router;
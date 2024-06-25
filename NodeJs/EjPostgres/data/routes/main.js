const express=require("express");
const router= express.Router();
const userscontroller=require("../controllers/userscontrollers");
const mainController=require("../controllers/maincontroller");
const bcrypt=require("bcrypt");
const multer =require("multer");

const storage=multer.diskStorage({
    destination: function (req,res,cb) {
        cb(null,"uploads/")
    },
    filename: function (req,res,cb) {
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})


router.get("/api/planets",mainController.getPlanets)

router.get("/api/planets/:id",mainController.getPlanId)

router.post("/api/planets",mainController.postPlanets)

router.put("api/planets/:id",mainController.putPlanetId)

router.delete("api/planets/:id",mainController.deletePlanet)

router.post("api/planets/:id/image",upload.single("planet"),mainController.uploadImage)

router.get("api/users",userscontroller.getusers)

module.exports= router;
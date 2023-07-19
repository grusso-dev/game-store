const express = require("express")
const router= express.Router();
const mainControlers =  require("../controllers/mainControllers");
router.get("/",mainControlers.index);
router.get("/about",mainControlers.about);

module.exports=router;
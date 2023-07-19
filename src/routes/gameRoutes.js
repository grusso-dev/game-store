const express = require("express")
const router= express.Router();
const gamesControlers =  require("../controllers/gamesControllers");
const multer=require("multer");
const path = require("path");
/* Configuracion del Multer  */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../../public/img"));// va la ubicacion deonde se guardara el archivo
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, 'game-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage })

router.get("/create",gamesControlers.getCreateform);
router.post("/create",upload.single("image"),gamesControlers.postCreateform);
router.get("/detail/:id",gamesControlers.detail);

module.exports=router;
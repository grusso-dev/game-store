const fs = require("fs");
const path = require("path");
const games=JSON.parse( fs.readFileSync(path.join(__dirname,"../data/games.json"),"utf-8"));
const mainControllers={
  index:function (req,res) {
    
    res.render("index",{games});
  },
  about:function (req,res) {
    res.render("about");
  },
};
module.exports = mainControllers;
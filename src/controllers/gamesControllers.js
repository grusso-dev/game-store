const fs = require("fs");
const path = require("path");
const gamesFilePath = path.join(__dirname, '../data/games.json');
const games=JSON.parse( fs.readFileSync(gamesFilePath,"utf-8"));
const gamesControllers={
  index:function (req,res) {
    
    res.render("index",{games});
  },
  detail:function (req,res) {
    
    let id = req.params.id;
    const game = games.find(game=>game.id==id);
    res.render("games/detail",{game});
  },
  getCreateform:function (req,res) {
    res.render("games/create");
  },
  postCreateform:function (req,res) {
    newgame={
      id:Math.random()*10000,
      title:req.body.title,
      Imagen:req.file? "/img/" + req.file.filename:"https://depor.com/resizer/ryjpVYp7gvye_0LgXZYRO_yL-B0=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MBJ5QO7YPRHIXI26D3OQM6KUZQ.JPG",
      Description:req.body.title + ": Descripcion",
      genero:req.body.genre
    };
    games.push(newgame);
    fs.writeFileSync(gamesFilePath, JSON.stringify(games,null,' '));


    res.render("games/create");
  }
};
module.exports = gamesControllers;
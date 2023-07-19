const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");

console.log(path.join(__dirname,"/src/views"));
app.set("views",path.join(__dirname,"/src/views"));
 
const mainRoutes =require("./src/routes/mainRoutes");
const gamesRoutes =require("./src/routes/gameRoutes");
app.use("/",mainRoutes);
app.use("/games",gamesRoutes);

// app.get('/', (req, res) => {
//   //res.send('Hello World!')
//   res.render("index");
// })

const port = 3010
app.listen(port,()=>{
  console.log("Servidor corriendo en el puerto: " + port)
});
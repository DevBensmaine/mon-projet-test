const express = require("express");
const path = require("path");

const route = express.Router();

route.get('/',(req,res,next) =>
{
    // res.send("<h1>Salassm Node Js</h1>")
//    res.sendFile("/views/shop.html")
   res.sendFile(path.join(__dirname,'../','views','shop.html'))
   // next();
});
module.exports = route;
const express = require("express");

const router = express.Router();


/// admin/addproduit ==> GET
router.get('/addproduit',(req,res,next) =>
{
    res.send(`
        <form action="addproduit" method="POST">
            <input type="text" name="nom" placeholder="rerere" >
            <input type="submit" value="Envoyee">    
        </form>
    `)
   // next();
});


/// admin/addproduit ==> POST

router.post('/addproduit',(req,res,next) =>
{
    console.log(req.body)
    res.redirect("/admin");
});

router.get('/',(req,res,next) =>
{
    res.send("<h1>Salam Node Js</h1>")
});

module.exports = router;



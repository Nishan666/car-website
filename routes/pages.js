const express = require("express");

const router = express.Router();



router.get('/',(req,res) =>{
    res.render('#');
});


router.get('/register',(req,res) =>{
    res.render('register');
});

router.get("/buy", (req, res) => {
  res.render("buy");
});

module.exports = router;
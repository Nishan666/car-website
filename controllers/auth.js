// from--> router-auth.js
// const authController = require('../controllers/auth');
// router.post('/register', authController.register )
// const db =require("../controllers/auth");
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({path:'./.env'});
// // config env file to hide sensitive data
// or
// const dotenv = require("dotenv").config();
const app =express();

app.use(express.json());

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
    // here the .env is the file externtion with no name , but we can give name like n.env or nick.env
    // the database,database_host these real data is preent in .env file
});





exports.buy = (req, res) => {
  console.log("inside buy");
  console.log(req.body);

  const name = req.body.name;
  const brand = req.body.brand;
  const model = req.body.model;
  const email = req.body.email;
  const phone = req.body.phone;

  db.query(
    "SELECT email FROM carbuy WHERE model = ?",
    [model],
    async (error, results) => {
      if (error) {
        console.log(error);
      }

      if (results.length > 0) {
        return res.render("buy", {
          message: "That model already enquired",
        });
      }

      db.query(
        "INSERT INTO carbuy SET ?",
        { name: name, brand: brand, model: model, email: email, phone: phone },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("buy", {
              message: "hurray ! order added",
              // return res.redirect('/');
            });
          }
        }
      );
    }
  );
};


exports.register = (req,res) => {
    console.log("inside login");
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;

    db.query('SELECT email FROM carsubscribe WHERE email = ?',[email], async (error,results) =>{

        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('register',{
                message:'That email is already in use'});
        }
            


            db.query('INSERT INTO carsubscribe SET ?',{name: name, email: email },(error,results)=>{
                if (error) {
                    console.log(error);
                }else{
                    console.log(results);
                    return res.render('register',{
                        message:'User Rgistered'
                    // return res.redirect('/');
                    });
                    
                }
               

            });
        
        });
     
}

















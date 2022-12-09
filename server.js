const express=require("express");
const path = require("path");

//
const mysql = require("mysql");
const dotenv = require("dotenv");
const { request } = require("http");
const { response } = require("express");

const app = express();

//
dotenv.config({path:'./.env'});

//
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//
const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
    // here the .env is the file externtion with no name , but we can give name like n.env or nick.env
    // the database,database_host these real data is preent in .env file
});

//
app.use(express.urlencoded({extended:false}));

//
app.set('view engine','hbs');
app.set("views","./views");

//
db.connect( (error)=> {
    if(error){
    console.log(error);
    }else{
        console.log("Mysql connected...");
    }
});



///////////////////////////////

app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});

app.get("/sport",function(req,res){
res.sendFile(__dirname + "/sport.html");
});

app.get("/electric",function(req,res){
res.sendFile(__dirname + "/electric.html");
});

app.get("/luxury",function(req,res){
res.sendFile(__dirname + "/luxury.html");
});

app.get("/sized",function(req,res){
res.sendFile(__dirname + "/sized.html");
});

app.get("/vintage",function(req,res){
res.sendFile(__dirname + "/vintage.html");
});



///////////////////////////////////////////////////
// report

app.get("/report",function(req,res){
res.sendFile(__dirname + "/report.html");
    
});


app.use(express.static(path.join(__dirname, 'public')));



//
// define router 
app.use('/',require('./routes/pages'));

app.use('/auth',require('./routes/auth'));




app.listen(3000,function(){
  console.log("Server is running in 3000 port");
});

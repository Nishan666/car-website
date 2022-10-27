const express=require("express");
const app = express();

app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});

//app.use(express.static('public'));

// app.post("/bmi",function(req,res){
//   console.log("thnak you");
//   res.send("thank you");
// });

app.listen(3000,function(){
  console.log("Server is running in 3000 port");
});

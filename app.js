const express=require("express")
const bodyParser=require("body-parser")
const app=express();
const superheroes = require('superheroes');
var  newitems=[];
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

superheroes.random();
//=> 'Spider-Ham'


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true}))
app.listen(3000,function(){
  console.log("server is up ");
})



app.get("/",function(req,res){

  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

app.use(express.static("views"))
today = dd + '/' + mm + '/' + yyyy;
  res.render('list', {Name:"Buddy",
  date:today,newitems1:newitems})
})


app.post("/",function(req,res){

   newitems.push(req.body.item)
   res.redirect("/")
})

var express       = require("express");
var 	app           = express();

app.use(express.static("public"));

//Routes
app.get("/", function(req, res){
    res.render("landing.ejs");
});

//teams-accelerons

app.get("/accelerons", function(req, res){
    res.render("accelerons.ejs");
});

app.get("/nitrox", function(req, res){
    res.render("nitrox.ejs");
});


app.get("/autokriti", function(req, res){
    res.render("autokriti.ejs");
});


app.get("/contact", function(req, res){
    res.render("contact.ejs");
});


//port lostning................................................................
//server start krne k lie terminal m ja ke bs likh do {node app.js}
app.listen(3000, function(){
    console.log("Website under construction!!, server started at port 3000,   just visit {localhost:3000}");
})
const express = require("express");
const path = require("path"); // You forgot to require 'path' module
const app = express();




//MIDDLEWARES= Data from forms.......
app.use(express.urlencoded({extended:true})); //MIDDLEWARE


//Serve the html form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


//Handel The HTML form

app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send(`your name is ${req.body.name}`)
 })




 
 
app.get("/search/hi",(req,res)=>{
    res.send("Hi from search!")

})


app.get("/search/:id",(req,res)=>{
    res.send(req.params.id)
    console.log(req.params)
})





app.listen(3000, () => {
    console.log("Server is up and running on http://localhost:3000");
});





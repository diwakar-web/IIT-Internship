const express= require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello from express server")
})

app.get("/about",(req,res)=>{
    res.send("Hello this is about page")
})

app.get("/json",(req,res)=>{
    res.json({
        name:"Diwakar"
    })
})

app.listen(3000,()=>{
    console.log("server is up and running")
})
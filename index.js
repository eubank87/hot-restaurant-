const http = require("http");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const tables = [];
const reservations = [];

app.get("/", (req, res)=>{
    res.send("Welcome to my site!")
})

app.get("/turtles", (req,res)=>{

})

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
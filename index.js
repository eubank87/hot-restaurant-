const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const reservations = [];
const waitlist = [];

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/home", (req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/tables", (req,res)=>{
  res.sendFile(path.join(__dirname, 'tables.html'))
})

app.get("/reservation", (req,res)=>{
  res.sendFile(path.join(__dirname, 'reservation.html'))
})

app.get("/api/reservations", (req,res)=>{
  res.json(reservations);
})

app.get("/api/waitlist", (req,res)=>{
  res.json(waitlist);
})

app.post("/api/reservations", (req,res) => {
  // takes the data from the POST and saves it into a new variable
  const newReservation = req.body;

  if (reservations.length < 5) {
    reservations.push(newReservation);
    newReservation.type = 'table';
  } else {
    waitlist.push(newReservation);
    newReservation.type = 'waitlist';
  }
  console.log(newReservation);
  console.log('reservation array', reservations);

  // send back JSON object of new reservation
  res.json(newReservation);
})

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
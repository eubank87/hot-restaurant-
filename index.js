const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [{
  testKey: 'testNameTables',
  alsoTestKey: 'testNameTooTables'
}];
const reservations = [{
  resName: 'dummyName',
  tableNum: 'dummyTable'
}];
const waitlist = [{
  testKey: 'testNameWait',
  alsoTestKey: 'testNameTooWait'
}]

app.get("/", (req, res)=>{
  res.send("Welcome to my site!")
})

app.get("/index", (req,res)=>{

})

app.get("/tables", (req,res)=>{

})

app.get("/reservations", (req,res)=>{

})

app.get("/api/tables", (req,res)=>{
  res.json(tables);
})

app.get("/api/reservations", (req,res)=>{
  res.json(reservations);
})

app.post("/api/reservations", (req,res) => {
  // takes the data from the POST and saves it into a new variable
  const newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
})

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
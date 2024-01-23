// server/index.js
const express = require('express');
const db = require("../db/db")
const app = express();
const cors = require("cors");
const corsOptions = {};
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/userDataApi', (req, res) => {
  db.getrandomdata().then(async(entry)=>{
  res.json(entry);
  })
});

app.get('/contactDataApi', (req, res) => {
  db.getrandomcontactsdata().then(async(entry)=>{
  res.json(entry);
  })
});
app.get('/mockBarData', (req, res) => {
  db.getrandommockbardata().then(async(entry)=>{
  res.json(entry);
  })
});
app.get('/mockLineData', (req, res) => {
  db.getrandommocklinedata().then(async(entry)=>{
  console.log('entry', entry);
  res.json(entry);
  })
});
app.get('/mockpieData', (req, res) => {
  db.getrandommockpiedata().then(async(entry)=>{
  console.log('mockLineData_entry', entry);
  res.json(entry);
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
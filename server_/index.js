// server/index.js
const express = require('express');
const db = require("../db/db")
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: 'http://localhost:3000/', // Replace with your actual frontend domain
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
  db.getrandomdata().then(async(entry)=>{
  //console.log('entry', entry);
  res.json(entry);
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
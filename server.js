// Budget API

const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();
const port = 3000;

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  res.sendFile("/Users/sameekksha/Desktop/NBAD/Week3/personal-budget1/server.json");
})

app.listen(port, () => {
  console.log(`API served at at http://localhost:${port}`)
});

const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  res.sendFile("/Users/sameekksha/Desktop/NBAD/Week3/personal-budget1/server.json");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
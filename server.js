const express = require ('express') ;
const app = express();
const port = 3000;
const fs = require('fs');

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('mybudget.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading JSON file: " + err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            try {
                const mybudgetData = JSON.parse(data);
                res.json(mybudgetData);
            } catch (parseErr) {
                console.error("Error parsing JSON data: " + parseErr);
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    });
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});
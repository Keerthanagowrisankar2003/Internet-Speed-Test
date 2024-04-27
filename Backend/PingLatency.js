const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/ping', (req, res) => {
    // Process the ping request
    res.send('Data received successfully');
});

module.exports = app;

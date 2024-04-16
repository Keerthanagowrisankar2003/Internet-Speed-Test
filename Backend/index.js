const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT =  5000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS

app.post('/ping', (req, res) => {
    // Simulate some processing time on the server side
    setTimeout(() => {
        res.send('Data received successfully');
    }, 100); // Simulating 100ms processing time
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

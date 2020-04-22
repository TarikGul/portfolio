const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();


// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup base routes
app.get('/', (req, res) => res.send('The dolphin has landed'));


// Setup the server
app.listen(port, () => console.log(`Server is running on ${port}`))
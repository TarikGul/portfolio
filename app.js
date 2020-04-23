const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();


const db = require('./config/keys').mongoURI;
// Connect database using mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log(err));

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup base routes
app.get('/', (req, res) => res.send('The dolphin has landed'));


// Setup the server
app.listen(port, () => console.log(`Server is running on ${port}`))
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const fs = require('fs');

const users = require('./routes/api/users');
const visitors = require('./routes/api/visitors');
const blogs = require('./routes/api/blogs');
const contacts = require('./routes/api/contacts');
const locations = require('./routes/api/locations');

// This is the twilio webhook
const twilioServer = require('./routes/api/message_server');

const port = process.env.PORT || 5000;

const app = express();

// Load static build folder in production
if (process.env.NODE_ENV === 'production') {
    app.use(sslRedirect());
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
};

// Check NODE_ENV for proper database env
const db = require('./config/db');

// To run mongo in development, write following in command line
// $ mongod --dbpath /Users/tarik/data
// Then in a new terminal write
// $ mongo to access the db with the shell

// Connect database using mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log(err));

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

// Setup base routes
app.use('/api/users', users);
app.use('/api/visitors', visitors);
app.use('/api/blogs', blogs);
app.use('/api/contacts', contacts);
app.use('/api/locations', locations)
app.get('/', (req, res) => res.send('The dolphin has landed'));



// Setup the server
app.listen(port, () => {
    if(process.env.DYNO) {
        console.log('This is heroku..!!');
        fs.openSync('/tmp/app-initialized');
    }
    console.log(`Server is running on ${port}`)
});

//message server
twilioServer.listen(1337, () => {
    if(process.env.DYNO) {
        console.log('This is heroku..!!');
        fs.openSync('/tmp/app-initialized');
    }
    console.log(`Express Messaging Server listening on port 1337`);
});

// Setup Procfile
// if you want NGINX to start the procfile needs to exist it is what starts 
// nginx server;
// web: bin/start-nginx node web.js
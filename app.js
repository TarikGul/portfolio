const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');

const users = require('./routes/api/users');
const visitors = require('./routes/api/visitors');
const blogs = require('./routes/api/blogs')

const checkInternet = require('./util/check_internet');

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


// let db;
// // Check if there is internet
// // This allows us to use the appropriate database
// // Either the cloud atlas or local mongodb server
// const connection = checkInternet.checkInternet(function(isConnected) {
//     if (isConnected) {
//         return true
//     } else {
//         return false
//     };
// });

// if (connection) {
//     db = require('./config/keys').mongoURI;
// } else {
//     db = 'mongodb://localhost:27017/portfolio'
// };


const db = require('./config/keys').mongoURI;
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
app.get('/', (req, res) => res.send('The dolphin has landed'));



// Setup the server
app.listen(port, () => console.log(`Server is running on ${port}`))
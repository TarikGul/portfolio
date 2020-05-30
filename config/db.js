module.exports = process.env.NODE_ENV === 'production' ?
    require('./config/keys').mongoURI : 'mongodb://localhost:27017/portfolio';
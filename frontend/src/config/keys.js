module.exports = process.env.NODE_ENV === 'production' ?
    (require('./keys_front_prod.js')) : (require('./keys_front.js'));
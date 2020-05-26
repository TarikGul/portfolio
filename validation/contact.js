const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateContactInput(contactData) {
    const errors = {};
    const data = { ...contactData };

    data.body = validText(data.message) ? data.message : '';
    data.title = validText(data.title) ? data.title : '';
     
}
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLocationInput(locationData) {
    const errors = {};
    const data = { ...locationData };

    data.body = validText(data.body) ? data.body : '';

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Location field must be filled';
    };

    return {
        errors,
        isValid: Object.keys(errors).length = 0
    };
};

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLocationInput(locationData) {
    const errors = {};
    const data = { ...locationData };

    data.message = validText(data.message) ? data.message : '';

    if (Validator.isEmpty(data.message)) {
        errors.message = 'Location field must be filled';
    };

    return {
        errors,
        isValid: Object.keys(errors).length = 0
    };
};

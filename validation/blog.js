const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBlogInput(blogData) {
    const errors = {};
    const data = { ...blogData };

    data.body = validText(data.description) ? data.description : '';
    data.title = validText(data.title) ? data.title : '';

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field must be filled';
    };

    if (Validator.isEmpty(data.title)) {
        errors.description = 'Title field must be filled';
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
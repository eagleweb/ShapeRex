const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.quiz_name = !isEmpty(data.quiz_name) ? data.quiz_name : '';
    data.quiz_description = !isEmpty(data.quiz_description) ? data.quiz_description : '';

    if(!Validator.isLength(data.quiz_name, { min: 2, max: 300 })) {
        errors.quiz_name = 'Quiz name must be between 2 to 300 chars';
    }

    if(Validator.isEmpty(data.quiz_name)) {
        errors.quiz_name = 'Name field is required';
    }

    if(!Validator.isLength(data.quiz_description, { min: 50, max: 300 })) {
        errors.quiz_description = 'Quiz description must be between 50 to 300 chars';
    }

    if(Validator.isEmpty(data.quiz_description)) {
        errors.quiz_description = 'Quiz description field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
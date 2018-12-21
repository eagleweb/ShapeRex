const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateQuestionInput(data) {
    let errors = {};
    data.answer = !isEmpty(data.answer) ? data.answer : '';
    data.question.question = !isEmpty(data.question.question) ? data.question.question : '';

    if(!Validator.isLength(data.question.question, { min: 2, max: 300 })) {
        errors.question = 'Question must be between 2 to 300 chars';
    }

    if(Validator.isEmpty(data.answer)) {
        errors.answer = 'Right answer field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
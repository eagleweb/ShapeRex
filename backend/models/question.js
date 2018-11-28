const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const VariantSchema = new Schema({answer: {type: String, required: true}});

const QuestionSchema = new Schema({
    question: {type: String, required: true},
    answer_variant: [VariantSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);
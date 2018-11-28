const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const VariantSchema = new Schema({answer: {type: String, required: true}});

const QuestionSchema = new Schema({
    question: {type: String, required: true},
    answer_variant: [VariantSchema]
});

const QuizSchema = new Schema({
    quiz_name: {type: String, required: true},
    questions: [QuestionSchema],
    added: {type: Date, required: true, default: Date.now},
    quiz_answer: {type: Array, required: true}
});


module.exports = mongoose.model('Quiz', QuizSchema);
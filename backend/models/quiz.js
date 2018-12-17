const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const QuestionSchema = new Schema({
    question: {type: String, required: true, default: ''},
    answer_variant: [{type: String, required: true, default: []}]
});

const QuizSchema = new Schema({
    quiz_name: {type: String, required: true, unique: true},
    quiz_description: {type: String},
    quiz_image: {type: String, default: ''},
    quiz_tag: {type: Array, default: []},
    questions: [QuestionSchema],
    added: {type: Date, required: true, default: Date.now},
    quiz_answer: {type: Array, required: true, default: []}
});

    QuizSchema.index({'quiz_name': 'text', 'quiz_description': 'text', 'quiz_tag': 'text'});


module.exports = mongoose.model('Quiz', QuizSchema);
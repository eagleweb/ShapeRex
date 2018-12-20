const express = require('express');
const quizRouter = express.Router();
const mongoose = require('mongoose');
const formidable = require('formidable');
mongoose.Promise = global.Promise;
const Quiz = require('../models/quiz');
const validateQuizInput = require('../validation/quiz');

quizRouter.route('/')

    .get(function (req, res) {
        Quiz.find({},{quiz_name: 1, quiz_tag: 1, quiz_image: 1, added: 1, quiz_description: 1}, function (err, result) {
            if (err) res.send(err);
            res.json(result);
        })
    })

    .post(function (req, res) {
        let body = {};

        new formidable.IncomingForm().parse(req)
            .on('fileBegin', (name, file) => {
                const fileType = file.type.split('/').pop();
                if(fileType === 'jpg' || fileType === 'png' || fileType === 'jpeg' ){
                    file.path = __dirname + '/../uploads/img/' + file.name;
                    body.quiz_image = file.name;
                } else {
                    errors.quiz_image = 'Image should be only jpg, png, jpeg type';
                    return res.status(400).json(errors);
                }
            })
            .on('field', (name, value) => {
                body[name] = value;
            })
            .on('end', () => {
                const { errors, isValid } = validateQuizInput(body);

                if(!isValid) {
                    return res.status(400).json(errors);
                }

                Quiz.findOne({
                    quiz_name: body.quiz_name
                }).then(quiz => {
                    if(quiz) {
                        errors.quiz_name = 'Quiz already exist';
                        return res.status(400).json(errors);
                    } else {
                        const newQuiz = new Quiz({
                            quiz_name: body.quiz_name,
                            quiz_description: body.quiz_description,
                            quiz_image: body.quiz_image,
                            quiz_tag: body.quiz_tag,
                            questions: body.questions,
                            quiz_answer: body.quiz_answer
                        });

                        newQuiz.save(function (err) {
                            if (err) {
                                return res.status(400).json(err);
                            }

                            res.json({id: newQuiz._id, success: true, message: 'Quiz added successfully'});
                        })
                    }
                })
            })
    });

quizRouter.route('/search')

    .get(function (req, res) {
        if (req.query.search === undefined || req.query.search === '') {
            res.json({success: false, message: 'Enter your search request!'});
        } else
            Quiz.find({ $text : { $search : req.query.search } }, { score : { $meta: "textScore" }, quiz_name: 1, quiz_image: 1, quiz_tag: 1, added: 1, quiz_description: 1 })
                .sort({ score : { $meta : 'textScore' } })
                // .limit(10)
                .exec(function(err, result) {
                    if (err) res.send(err);
                    const obj = Object.assign({result: result}, {search_result: true});
                    res.json(obj)
                });
    });

quizRouter.route('/:quiz_id')

    .get(function (req, res) {
        Quiz.findById(req.params.quiz_id, function (err, result) {
            if (err) res.send(err);
            res.json(result);
        })
    })

    .put(function (req, res) {
        Quiz.update({_id: req.params.quiz_id}, {$addToSet: {questions: {$each: req.body.question}}, $push: {quiz_answer: req.body.answer}}, function(err){
            if (err) res.send(err);
            res.json({success: true, message: 'Quiz updated!'})
        });
    });

module.exports = quizRouter;
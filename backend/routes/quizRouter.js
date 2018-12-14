const express = require('express');
const quizRouter = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Quiz = require('../models/quiz');

quizRouter.route('/')

    .get(function (req, res) {
        Quiz.find({},{quiz_name: 1, quiz_tag: 1, added: 1, quiz_description: 1}, function (err, result) {
            if (err) res.send(err);
            res.json(result);
        })
    })


    .post(function (req, res) {
        if (!req.body) {
            res.json({success: false, message: 'Please enter your quiz'});
        } else {
            const newQuiz = new Quiz({
                quiz_name: req.body.quiz_name,
                quiz_description: req.body.quiz_description,
                quiz_tag: req.body.quiz_tag,
                questions: req.body.questions,
                quiz_answer: req.body.quiz_answer
            });

            newQuiz.save(function (err) {
                if (err) {
                    console.log(err);
                    if (err.code === 11000) {
                        return res.json({success: false, message: 'Adding failed. Question exist.'});
                    } else res.send(err);
                }
                res.json({success: true, message: 'Question added successfully'});
            })
        }
    });

quizRouter.route('/search')

    .get(function (req, res) {
        if (req.query.search === undefined || req.query.search === '') {
            res.json({success: false, message: 'Enter your search request!'});
        } else
            Quiz.find({ $text : { $search : req.query.search } }, { score : { $meta: "textScore" }, quiz_name: 1, quiz_tag: 1, added: 1, quiz_description: 1 })
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
    });

module.exports = quizRouter;
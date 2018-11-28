const express = require('express');
const quizRouter = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Quiz = require('../models/quiz');

quizRouter.route('/')

    .get(function (req, res) {
        Quiz.find({},{quiz_name: 1}, function (err, result) {
            if (err) res.send(err);
            res.json(result);
        })
    })

    .post(function (req, res) {
        if (!req.body) {
            res.json({success: false, message: 'Please enter your question'});
        } else {
            const newQuiz = new Quiz({
                quiz_name: req.body.quiz_name,
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

module.exports = quizRouter;
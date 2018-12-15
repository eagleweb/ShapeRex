import React from 'react'
import { NavLink } from 'react-router-dom'

const QuizResult = ({user_answer, quiz_answer}) => {

    let right_answer = 0;
    const answer_length = user_answer.length;

    if (user_answer.length === quiz_answer.length) {
        user_answer.forEach(function(item, i) {
            if (item === quiz_answer[i]) {
                right_answer++
            }
        })
    } else {
        for (let i=0; i<quiz_answer.length-answer_length; i++){
            user_answer.push(0);
        }

        user_answer.forEach(function(item, i) {
            if (item === quiz_answer[i]) {
                right_answer++
            }
        })
    }

    let result = right_answer * 100 / quiz_answer.length;

    return (
        <div>
            <p>You result is {Math.round(result)} % of right answer!</p>
            <NavLink to="/quiz">Back to quiz page</NavLink>
        </div>
    )
};

export default QuizResult
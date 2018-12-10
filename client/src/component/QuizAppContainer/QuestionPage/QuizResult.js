import React from 'react'

const QuizResult = ({answer, quiz_answer}) => {

    let right_answer = 0;
    answer.forEach(function(item, i) {
        if (item === quiz_answer[i]) {
            right_answer++
        }
    });
    let result = right_answer * 100 /answer.length;

    return (
        <div>
            <p>You result is {Math.round(result)} % of right answer!</p>
        </div>
    )
};

export default QuizResult
import React from 'react'
import { Route, Link } from 'react-router-dom'
import quiz from '../../../mocks/quiz'

const QuizSelect = ({match}) => (
    <div>
        <ul>
            {quiz.map((item) =>
                <li key={item.id}><Link to={`quiz/${item.id}`}>{item.quizname}</Link></li>
            )}
        </ul>
    </div>
);

export default QuizSelect
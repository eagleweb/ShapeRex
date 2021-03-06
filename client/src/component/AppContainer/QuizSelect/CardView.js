import React from 'react'
import s from './quizselect.module.css'

const CardView = ({quizzes_list, history}) => (
    <div className={s.cards_container}>
        {quizzes_list.map((item) =>
            <div key={item._id} className={s.card_item}>
                <img src={`../../../../../backend/uploads/img/${item.quiz_image}`} alt="image" />
                <div className={s.card_description}>
                    <h2>{item.quiz_name}</h2>
                    <p>{item.quiz_description}</p>
                    <button onClick={() => history.push(`/quiz/${item._id}`)}>Start</button>
                </div>
            </div>
        )}
    </div>
);

export default CardView
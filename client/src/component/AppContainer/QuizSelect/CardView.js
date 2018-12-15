import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody} from 'reactstrap';
import s from './quizselect.module.css'

const CardView = ({quizzes_list}) => (
    <CardGroup>
        {quizzes_list.map((item) =>
            <Card key={item._id} className={s.card_item}>
                <CardImg top src="" alt="" />
                <CardBody>
                    <CardTitle>{item.quiz_name}</CardTitle>
                    <CardText>{item.quiz_description}</CardText>
                    <Link to={`quiz/${item._id}`}><Button>Start</Button></Link>
                </CardBody>
            </Card>
        )}
    </CardGroup>
);

export default CardView
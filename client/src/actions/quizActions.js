import {GET_QUIZ, ADD_QUIZ, DELETE_QUIZ, QUIZ_LOADING, GET_ALL_QUIZZES} from './types'
import axios from 'axios'

export const getAllQuizzes  = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:8081/api/quiz').then(res =>
        dispatch({
            type: GET_ALL_QUIZZES,
            payload: res.data
        })
    );
};

export const getQuiz = id => dispatch => {
    dispatch(setItemsLoading());
    axios.get(`http://localhost:8081/api/quiz/${id}`).then(res =>
        dispatch({
            type: GET_QUIZ,
            payload: res.data
        })
    );
};

export const addQiuz = quiz => dispatch => {
    axios.post('/api/quiz', quiz).then(res =>
        dispatch({
            type: ADD_QUIZ,
            payload: res.data
        })
    );
};

export const deleteQuiz = id => dispatch => {
    axios.delete(`/api/quiz/${id}`).then(res =>
        dispatch({
            type: DELETE_QUIZ,
            payload: id
        })
    );
};

export const setItemsLoading = () => {
    return {
        type: QUIZ_LOADING
    };
};
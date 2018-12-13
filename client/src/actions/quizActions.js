import * as types from './types'
import axios from 'axios'

export const getAllQuizzes  = () => dispatch => {
    dispatch({
        type: types.GET_ALL_QUIZZES_START
    });

    axios.get('/api/quiz')
        .then(res => dispatch({
            type: types.GET_ALL_QUIZZES_SUCCESS,
            payload: res.data
        }))
        .catch (error => dispatch ({
            type: types.GET_ALL_QUIZZES_ERROR,
            payload: error.message
        }))
};

export const getQuiz = id => dispatch => {
    dispatch({
        type: types.GET_QUIZ_START
    });

    axios.get(`/api/quiz/${id}`)
        .then(res => dispatch ({
            type: types.GET_QUIZ_SUCCESS,
            payload: res.data
        }))
        .catch (error => dispatch ({
            type: types.GET_QUIZ_ERROR,
            payload: error.message
        }))
};

export const searchQuiz = search_phrase => dispatch => {
    dispatch({
        type: types.SEARCH_QUIZ_START
    });

    axios.get('/api/quiz/search/', {params: {search: search_phrase}})
        .then(res => dispatch ({
            type: types.SEARCH_QUIZ_SUCCESS,
            payload: res.data
        }))
        .catch (error => dispatch ({
            type: types.SEARCH_QUIZ_ERROR,
            payload: error.message
        }))
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
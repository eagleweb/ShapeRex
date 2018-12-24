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

export const addQuiz = (quiz, history) => dispatch => {
    dispatch({
        type: types.ADD_QUIZ_START
    });

    axios.post('/api/quiz', quiz,
        {headers: {
            'Content-Type': 'multipart/form-data'
        }})
        .then(res => {
            dispatch({
                type: types.ADD_QUIZ_SUCCESS,
                payload: res.data
            });
            history.push('/quiz/add/question/1')
            }
        )
        .catch(err => dispatch({
                type: types.ADD_QUIZ_ERROR,
                payload: err.response.data
        }))
};

export const updateQuiz = (id, data, history, nextPage) => dispatch => {
    dispatch({
        type: types.UPDATE_QUIZ_START
    });

    axios.put(`/api/quiz/${id}`, data)
        .then(res => {
            dispatch({
                type: types.UPDATE_QUIZ_SUCCESS,
                payload: res.data
            });
            history.push('/quiz/add/question/' + nextPage)
            }
        )
        .catch(err => dispatch({
            type: types.UPDATE_QUIZ_ERROR,
            payload: err.response.data
        }))
};

export const deleteQuiz = id => dispatch => {
    axios.delete(`/api/quiz/${id}`).then(res =>
        dispatch({
            type: DELETE_QUIZ,
            payload: id
        })
    );
};
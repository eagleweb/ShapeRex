import {GET_ALL_QUIZZES, GET_QUIZ, ADD_QUIZ, DELETE_QUIZ, QUIZ_LOADING} from "../actions/types"

const initialState = {
    quizzes_list: [],
    quiz: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_QUIZZES:
            return {...state, quizzes_list: action.payload};
        case GET_QUIZ:
            return {...state, quiz: action.payload};
        case ADD_QUIZ:
            return {...state, quizzes: [...state.quizzes, action.payload]};
        case DELETE_QUIZ:
            return {...state, quizzes: state.quizzes.filter(quiz => quiz._id !== action.payload)};
        case QUIZ_LOADING:
            return {...state, loading: true};
        default: return state
    }
}
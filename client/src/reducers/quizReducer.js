import * as types from "../actions/types"

const initialState = {
    quizzes_list: [],
    quiz: {},
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_QUIZZES_START:
            return {...state, isLoading: true, error: null};
        case types.GET_ALL_QUIZZES_SUCCESS:
            return {...state, isLoading: false, quizzes_list: action.payload};
        case types.GET_ALL_QUIZZES_ERROR:
            return {...state, error: action.payload};
        case types.GET_QUIZ_START:
            return {...state, isLoading: true, error: null};
        case types.GET_QUIZ_SUCCESS:
            return {...state, isLoading: false, quiz: action.payload};
        case types.GET_QUIZ_ERROR:
            return {...state, error: action.payload};
        case types.SEARCH_QUIZ_START:
            return {...state, isLoading: true, error: null};
        case types.SEARCH_QUIZ_SUCCESS:
            return {...state, isLoading: false, quizzes_list: action.payload};
        case types.SEARCH_QUIZ_ERROR:
            return {...state, error: action.payload};
        case types.ADD_QUIZ:
            return {...state, quizzes: [...state.quizzes, action.payload]};
        case types.DELETE_QUIZ:
            return {...state, quizzes: state.quizzes.filter(quiz => quiz._id !== action.payload)};
        default: return state
    }
}
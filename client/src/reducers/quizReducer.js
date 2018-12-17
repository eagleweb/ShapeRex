import * as types from "../actions/types"

const initialState = {
    quizzes_list: [],
    quiz: {},
    isLoading: false,
    error: null,
    search_result: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_QUIZZES_START:
            return {...state, isLoading: true, error: null};
        case types.GET_ALL_QUIZZES_SUCCESS:
            return {...state, isLoading: false, quizzes_list: action.payload,  search_result: false};
        case types.GET_ALL_QUIZZES_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case types.GET_QUIZ_START:
            return {...state, isLoading: true, error: null};
        case types.GET_QUIZ_SUCCESS:
            return {...state, isLoading: false, quiz: action.payload};
        case types.GET_QUIZ_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case types.SEARCH_QUIZ_START:
            return {...state, isLoading: true, error: null};
        case types.SEARCH_QUIZ_SUCCESS:
            return {...state, isLoading: false, quizzes_list: action.payload.result, search_result: action.payload.search_result};
        case types.SEARCH_QUIZ_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case types.ADD_QUIZ_START:
            return {...state, isLoading: true, error: null};
        case types.ADD_QUIZ_SUCCESS:
            return {...state, isLoading: false, error: null, quiz: action.payload};
        case types.ADD_QUIZ_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case types.DELETE_QUIZ:
            return {...state, quizzes: state.quizzes.filter(quiz => quiz._id !== action.payload)};
        default: return state
    }
}
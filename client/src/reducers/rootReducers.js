import { combineReducers } from 'redux'
import quizReducers from './quizReducer'
import autherrorReducer from './autherrorReducer'
import authReducer from './authReducer'

export default combineReducers({
    quizzes: quizReducers,
    auth_error: autherrorReducer,
    auth: authReducer
});
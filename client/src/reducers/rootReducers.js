import { combineReducers } from 'redux'
import quizReducers from './quizReducer'

export default combineReducers({
    quizzes: quizReducers
});
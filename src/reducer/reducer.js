import vinylsReducer from './vinylsReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    vinyls: vinylsReducer
})
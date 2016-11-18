import { combineReducers } from 'redux'
import mngtReducer from './mngtReducer'
import {hospitalModeledReducer, initialState} from './hospitalReducer'
import { routerReducer as routing } from 'react-router-redux'
import { formReducer } from 'react-redux-form'


const mngtConsoleApp = combineReducers({
    mngtReducer,
    hospitalModeledReducer,
    hospitalForm: formReducer('record', initialState),
    routing,
})

export default mngtConsoleApp
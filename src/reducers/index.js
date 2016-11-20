import { combineReducers } from 'redux'
import mngtReducer from './mngtReducer'
import {dialogModeledReducer, initialDialogState} from './dialogReducer'
import {hospitalModeledReducer, initialState} from './hospitalReducer'
import { routerReducer as routing } from 'react-router-redux'
import { formReducer } from 'react-redux-form'


const mngtConsoleApp = combineReducers({
    mngtReducer,
    dialogModeledReducer,
    hospitalModeledReducer,
    hospitalForm: formReducer('record', initialState),
    dialogForm: formReducer('dialog', initialDialogState),
    routing,
})

export default mngtConsoleApp
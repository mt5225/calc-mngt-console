import { modeled } from 'react-redux-form'

const initialState = {
    hospital: {}
}

function hospitalReducer(state = initialState, action) {
    switch (action.type) {
        case 'A_HOSPITAL_SELECTED':
            return Object.assign(
                {},
                state,
                {
                    hospital: action.payload
                }
            )
        case 'A_NEW_RECORD':
            return initialState
        default:
            return state
    }
}

const hospitalModeledReducer = modeled(hospitalReducer, 'record')
export { hospitalModeledReducer, initialState }
import { modeled } from 'react-redux-form'

const initialState = {
    hospital: {}
}

function hospitalReducer(state = initialState, action) {
    switch (action.type) {
        case 'A_HOSPITAL_SELECTED':
            return { ...state, hospital: action.payload }

        case 'A_NEW_RECORD':
            return initialState

        case 'A_ADD_NEW_CITY':
            let cities = state.hospital.cities.slice(0)
            cities.push(action.payload)
            const hospitalWithNewCities = { ...state.hospital, cities: cities}
            return { ...state, hospital: hospitalWithNewCities }

        case 'A_ADD_NEW_DOCTOR':
            let doctors = state.hospital.doctors.slice(0)
            doctors.push(action.payload)
            const hospitalWithNewDoctors = { ...state.hospital, doctors: doctors}
            return { ...state, hospital: hospitalWithNewDoctors }

        default:
            return state
    }
}

const hospitalModeledReducer = modeled(hospitalReducer, 'record')
export { hospitalModeledReducer, initialState }
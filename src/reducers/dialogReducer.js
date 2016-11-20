import { modeled } from 'react-redux-form'
/**
 * initial state
 */

const initialDialogState = {
    showCityDialog: false,
    showDoctorDialog: false,
    city: {},
    doctor: {},
}

const dialogReducer = (state = initialDialogState, action) => {
    switch (action.type) {
         case 'A_NEW_RECORD':
            return initialDialogState

        case 'A_CITY_DIALOG_SHOW':
            return Object.assign(
                {},
                state,
                { showCityDialog: true }
            )
        case 'A_CITY_DIALOG_CLOSE':
            return Object.assign(
                {},
                state,
                { showCityDialog: false }
            )
        case 'A_DOCTOR_DIALOG_SHOW':
            return Object.assign(
                {},
                state,
                { showDoctorDialog: true }
            )
        case 'A_DOCTOR_DIALOG_CLOSE':
            return Object.assign(
                {},
                state,
                { showDoctorDialog: false }
            )
        default:
            return state
    }

}

const dialogModeledReducer = modeled(dialogReducer, 'dialog')
export { dialogModeledReducer, initialDialogState }
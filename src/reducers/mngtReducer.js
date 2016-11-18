
/**
 * initial state
 */

const initialState = {
    records: {},
    ifReady: false,
    ifAPISuccess: false,
    showOpDialog: false,
}

const mngtReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'E_REQ_FAILED':
            return Object.assign(
                {},
                state,
                { ifReady: false }
            )
        case 'E_REQ_SUCCESS':
            return Object.assign(
                {},
                state,
                {
                    ifReady: true,
                    records: action.payload
                }
            )
        case 'E_UPDATE_SUCCESS':
            return Object.assign(
                {},
                state,
                {
                    ifAPISuccess: true,
                    showOpDialog: true,
                }
            )
        case 'E_UPDATE_FAILED':
            return Object.assign(
                {},
                state,
                {
                    ifAPISuccess: false,
                    showOpDialog: true,
                }
            )
        case 'A_UPDATE_OP_STATUS':
            return Object.assign(
                {},
                state,
                {
                    showOpDialog: action.payload,
                }
            )
        default:
            return state
    }

}

export default mngtReducer
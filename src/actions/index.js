import * as api from '../services/api'
import { push } from 'react-router-redux'
import * as UTIL from '../services/util'

/**
 * api status
 */
export const fetchRecordRequestSent = (msg) => {
    return {
        type: 'E_REQ_SENT',
        value: msg,
    }
}

export const fetchRecordFailed = (statusText) => {
    return {
        type: 'E_REQ_FAILED',
        value: statusText,
    }
}

export const fetchRecordSuccess = (data) => {
    return {
        type: 'E_REQ_SUCCESS',
        payload: data,
    }
}

export const updateRecordSuccess = () => {
    return {
        type: 'E_UPDATE_SUCCESS',
    }
}

export const updateRecordFailed = (statusText) => {
    return {
        type: 'E_UPDATE_FAILED',
        value: statusText,
    }
}

export const deleteRecordFailed = (statusText) => {
    return {
        type: 'E_DELETE_FAILED',
        value: statusText,
    }
}

export const deleteRecordSuccess = () => {
    return {
        type: 'E_DELETE_SUCCESS',
    }
}

/**
 * Operation dialog action
 */
export const dialogAction = (payload) => {
    return {
        type: 'A_UPDATE_OP_STATUS',
        payload,
    }
}

/**
 * fetch hospital records
 */
export const fetchHospitalRecordAction = () => {
    return (dispatch, getState) => {
        dispatch(fetchRecordRequestSent('fetch hospital record'))
        api.fetchHospitalRecord()
            .then(response => {
                if (response.status !== 200) {
                    dispatch(fetchRecordFailed(response.statusText))
                } else {
                    return response.json()
                        .then(result => {
                            dispatch(fetchRecordSuccess(result))
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }
            }).catch(e => {
                console.log(e);
            })
    }
}

export const hosptalToBeEditAction = (payload) => {
    return {
        type: 'A_HOSPITAL_SELECTED',
        payload: payload,
    }
}


export const hospitalItemSelectedAction = (payload) => {
    return (dispatch, getState) => {
        const selectedHospital = UTIL.findHospitalByID(
            getState().mngtReducer.records,
            payload.value)
        dispatch(hosptalToBeEditAction(selectedHospital))
        dispatch(push('/edit'))
    }
}

export const saveModifyAction = () => {
    return (dispatch, getState) => {
        const payload = getState().hospitalModeledReducer.hospital
        dispatch(fetchRecordRequestSent('update hospital record'))
        api.updateRecord(payload)
            .then(response => {
                if (response.status !== 200) {
                    dispatch(updateRecordFailed(response.statusText))
                } else {
                    return response.json()
                        .then(result => {
                            dispatch(updateRecordSuccess())
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }
            }).catch(e => {
                console.log(e);
            }
            )
    }
}

export const deleteRecordAction = () => {
    return (dispatch, getState) => {
        const UUID = getState().hospitalModeledReducer.hospital.id
        dispatch(fetchRecordRequestSent('delete record'))
        api.deleteRecord(UUID)
            .then(response => {
                if (response.status !== 200) {
                    dispatch(deleteRecordFailed(response.statusText))
                } else {
                    return response.json()
                        .then(result => {
                            dispatch(deleteRecordSuccess())
                            dispatch(push('/list'))
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }
            }).catch(e => {
                console.log(e);
            }
            )
    }
}
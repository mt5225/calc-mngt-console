import * as UTIL from './util'

const LOCAL = {
    IP: 'localhost',
    PORT: '4040'
}
const QA = {
    IP: 'qa.mt5225.com',
    PORT: '4040'
}

const PROD = {
    IP: 'mt5225.com',
    PORT: '4040'
}

//const BACKEND_URL = LOCAL.IP + ':' + LOCAL.PORT
//const BACKEND_URL = QA.IP + ':' + QA.PORT
const BACKEND_URL = PROD.IP + ':' + PROD.PORT

/**
 * fetch booking record for data range
 */
export function fetchHospitalRecord() {
    const url = "http://" + BACKEND_URL + "/api/hospitals"
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'GET',
    })
}

/**
 * update record
 */

export function updateRecord(payload) {
    let payloadClone = {}
    let url = ''
    //check if UUID exist, if not, generate one for new record
    if (!('id' in payload)) {
        payloadClone = Object.assign(
            {},
            payload,
            {
                id: UTIL.generateUUID(),
                cities: [],
                doctors: [],
            })
        url = "http://" + BACKEND_URL + "/api/hospitals/"
    } else {
        payloadClone = Object.assign(
            {},
            payload
        )
        url = "http://" + BACKEND_URL + "/api/hospitals/" + payloadClone.id
    }
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify(payloadClone)
    })
}

/**
 * delete record
 */
export function deleteRecord(uuid) {
    const url = "http://" + BACKEND_URL + "/api/hospitals/" + uuid
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'DELETE',
    })
}

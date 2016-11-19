import * as UTIL from './util'

const BASE_URL = 'localhost'
//const BASE_URL = '52.53.191.1'

/**
 * load all the data from backend service
 */



/**
 * fetch booking record for data range
 */
export function fetchHospitalRecord() {
    const url = "http://" + BASE_URL + ":4040/api/hospitals"
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
        url = "http://" + BASE_URL + ":4040/api/hospitals/"
    } else {
        payloadClone = Object.assign(
            {},
            payload
        )
        url = "http://" + BASE_URL + ":4040/api/hospitals/" + payloadClone.id
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
    const url = "http://" + BASE_URL + ":4040/api/hospitals/" + uuid
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'DELETE',
    })
}

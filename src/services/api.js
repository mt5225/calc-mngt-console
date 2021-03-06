//const BASE_URL = 'localhost'
const BASE_URL = '52.53.191.1'

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
    const url = "http://" + BASE_URL + ":4040/api/hospitals/" + payload.id
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify(payload)
    })
}
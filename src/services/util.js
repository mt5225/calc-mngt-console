/**
 * find hospital by ID
 * 
 */

export function findHospitalByID(records, id) {
    let hospitalDetail = null
    for (var index = 0; index < records.length; index++) {
        if (records[index].id === id) {
            hospitalDetail = records[index]
        }
    }
    return hospitalDetail
}
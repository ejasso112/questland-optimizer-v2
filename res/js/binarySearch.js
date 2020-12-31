import state from './state.js'

//Binary Search Function to search for right gear fast
const binarySearch = value => {
    let start = 0
    let end = state.gear.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (state.gear[mid].id === value) {
            return state.gear[mid]
        } else if (state.gear[mid].id < value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return null
}

export default binarySearch

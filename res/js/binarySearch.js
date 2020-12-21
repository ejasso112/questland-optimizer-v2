import state from './state.js'

//Binary Search Function to search for right gear fast
const binarySearch = value => {
    let start = 0
    let end = state.data.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (state.data[mid].id === value) {
            return state.data[mid]
        } else if (state.data[mid].id < value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return null
}

export default binarySearch

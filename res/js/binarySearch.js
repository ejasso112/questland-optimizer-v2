import state from './state.js'

//Binary Search Function to search for right gear fast
const binarySearch = (data, property, value) => {
    let start = 0
    let end = data.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (data[mid][property] === value) {
            return data[mid]
        } else if (data[mid][property] < value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return null
}

export default binarySearch

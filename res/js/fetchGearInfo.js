import state from './state.js'

// Sort JSON by property Function
const sortByProperty = property => {
    return function (a, b) {
        if (a[property] > b[property]) return 1
        else if (a[property] < b[property]) return -1
        return 0
    }
}

const fetchData = async () => {
    const urlGear = 'https://questland-public-api-dot-questland-tools.uc.r.appspot.com/items?filterArtifacts=false'
    const resGear = await fetch(urlGear)
    const dataGear = await resGear.json()

    state.gear = dataGear
    state.gearSorted = dataGear.slice().sort(sortByProperty('name'))
}

export default fetchData
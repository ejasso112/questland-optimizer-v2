import state from './state.js'
import {updateInputsEventlisteners} from './updateInputs.js'

window.state = state

$(function () {
    $(document).on('click', 'input', function () {
        this.select()
    })
})

// Fetching Data Function
const getData = () => {
    const url = 'https://questland-public-api-dot-questland-tools.uc.r.appspot.com/items?filterArtifacts=false'

    return fetch(url)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            state.data = data
            state.sortedData = data.slice().sort(sortByProperty('name'))
        })
}

/* Sort JSON by property Function */
const sortByProperty = property => {
    return function (a, b) {
        if (a[property] > b[property]) return 1
        else if (a[property] < b[property]) return -1
        return 0
    }
}

// Calling Fetch and Displaying Selects
getData().then(() => {
    const getEquppedGearSelector = document.getElementsByClassName('optimizer__equippedGear__selection')
    const getCollectionGearSelector = document.getElementsByClassName('optimizer__collectionGear__selection')

    console.log(state.data)

    for (let i = 0; i < state.sortedData.length; i++) {
        if (
            state.sortedData[i].quality !== 'ARTIFACT1' &&
            state.sortedData[i].quality !== 'ARTIFACT2' &&
            state.sortedData[i].quality !== 'ARTIFACT3' &&
            state.sortedData[i].quality !== 'ARTIFACT4' &&
            state.sortedData[i].quality !== 'ARTIFACT5'
        ) {
            const optionEquipped = document.createElement('option')
            optionEquipped.id = state.sortedData[i].id
            optionEquipped.text = state.sortedData[i].name
            getEquppedGearSelector[0].add(optionEquipped)

            const optionCollection = document.createElement('option')
            optionCollection.id = state.sortedData[i].id
            optionCollection.text = state.sortedData[i].name
            getCollectionGearSelector[0].add(optionCollection)
        }
    }

    for (let i = 0; i < 6; i++) {
        $('.optimizer__equippedGear__table__tableRow:last-child').clone().appendTo('.optimizer__equippedGear__table__tableBody')
    }

    for (let i = 0; i < 19; i++) {
        $('.optimizer__collectionGear__table__tableRow:last-child').clone().appendTo('.optimizer__collectionGear__table__tableBody')
    }
}).then(() => {
    updateInputsEventlisteners()
})

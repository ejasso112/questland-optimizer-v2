import state from './state.js'
import { updateInputsEventlisteners } from './updateInputs.js'
import { setInputsEventlisteners } from './setInputs.js'
window.state = state

// Highligh text on input click
$(function () {
    $(document).on('click', 'input', function () {
        this.select()
    })
})

// Sort JSON by property Function
const sortByProperty = property => {
    return function (a, b) {
        if (a[property] > b[property]) return 1
        else if (a[property] < b[property]) return -1
        return 0
    }
}

// Fatch Data Function
const fetchData = async () => {
    const urlGear = 'https://questland-public-api-dot-questland-tools.uc.r.appspot.com/items?filterArtifacts=false'
    const resGear = await fetch(urlGear)
    const dataGear = await resGear.json()

    state.data = dataGear
    state.sortedData = dataGear.slice().sort(sortByProperty('name'))
}

const main = async () => {
    // Fetch data
    await fetchData()
    console.log(state.sortedData)

    // Fill options for Select Elements
    for (let i = 0; i < state.sortedData.length; i++) {
        if (
            state.sortedData[i].quality !== 'ARTIFACT1' &&
            state.sortedData[i].quality !== 'ARTIFACT2' &&
            state.sortedData[i].quality !== 'ARTIFACT3' &&
            state.sortedData[i].quality !== 'ARTIFACT4' &&
            state.sortedData[i].quality !== 'ARTIFACT5' &&
            state.sortedData[i].id !== 24105 &&
            state.sortedData[i].id !== 24109 &&
            state.sortedData[i].id !== 24111 &&
            state.sortedData[i].id !== 24113 &&
            state.sortedData[i].id !== 24115 &&
            state.sortedData[i].id !== 24117
        ) {
            $('.optimizer__equippedGear__selection').append(
                $('<option>', {
                    id: state.sortedData[i].id,
                    value: state.sortedData[i].name,
                    text: state.sortedData[i].name,
                })
            )

            $('.optimizer__collectionGear__selection').append(
                $('<option>', {
                    id: state.sortedData[i].id,
                    value: state.sortedData[i].name,
                    text: state.sortedData[i].name,
                })
            )
        }
    }

    // Clone Equipped Gear Select Element
    for (let i = 0; i < 6; i++) {
        $('.optimizer__equippedGear__table__tableRow:last-child').clone().appendTo('.optimizer__equippedGear__table__tableBody')
    }
    // Clone Collection Gear Select Element
    for (let i = 0; i < 19; i++) {
        $('.optimizer__collectionGear__table__tableRow:last-child').clone().appendTo('.optimizer__collectionGear__table__tableBody')
    }

    //Add listener for Updates on any input on change
    updateInputsEventlisteners()
    //Add listener on Set inputs player information on click
    setInputsEventlisteners()
    //Loading Complete
    $('#loading').remove()

    //Test Sample
    $('#playerName').val('TOXICB3AST')
    $('#guildName').val('I Want Moore')
    $('#serverName').val('AMERICA')
}
main()

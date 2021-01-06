import state from './state.js'

import fetchGearInfo from './fetchGearInfo.js'
import fetchLocalStorage from './fetchLocalStorage.js'
import { fetchPlayerInfoListener } from './fetchPlayerInfo.js'
import { optimizeCollectionsListener } from './optimizeCollections.js'
import setDocumentSelectors from './setDocumentSelectors.js'

import { updateInputsEventlisteners } from './updateInputs.js'

window.state = state

// Highligh text on input click
$(function () {
    $(document).on('click', 'input', function () {
        this.select()
    })
})

const main = async () => {
    // Fetch all gear data from API function call
    await fetchGearInfo()
    // Clone and display select element for all input fields
    await setDocumentSelectors()

    // Fetch Player data that is stored in local storage
    await fetchLocalStorage()

    // Listener to fetch Player and Guild data on button click
    fetchPlayerInfoListener()
    // Listener to update Player and Guild data on input changes
    updateInputsEventlisteners()
    optimizeCollectionsListener()
    // Remove loading element once done loading
    $('#loading').remove()
    $('.optimize__container').css('filter', 'none')
    $('.optimize__container').css('pointer-events', 'visible')
}

main()
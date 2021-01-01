import state from './state.js'
import { displayGuildBonuses, displayCollectionPercentages, displayEquippedGear, displayCollectionGear } from './displayInputs.js'

const fetchLocalStorage = () => {
    fetchGuildBonuses()
    fetchCollectionPercentages()
    fetchEquppedGear()
    fetchCollectionGear()
}

const fetchGuildBonuses = () => {
    if(typeof(localStorage.getItem('guildBonuses')) === 'string') {
        state.guildBonuses = JSON.parse(localStorage.getItem('guildBonuses'))
        displayGuildBonuses()
    }
}

const fetchCollectionPercentages = () => {
    if(typeof(localStorage.getItem('collectionPercentages')) === 'string') {
        state.collectionPercentages = JSON.parse(localStorage.getItem('collectionPercentages'))
        displayCollectionPercentages()
    }
}

const fetchEquppedGear = () => {
    if(typeof(localStorage.getItem('equppedGear')) === 'string') {
        state.equppedGear = JSON.parse(localStorage.getItem('equppedGear'))
        displayEquippedGear()
    }
}

const fetchCollectionGear = () => {
    if(typeof(localStorage.getItem('collectionGear')) === 'string') {
        state.collectionGear = JSON.parse(localStorage.getItem('collectionGear'))
        displayCollectionGear()
    }
}

export default fetchLocalStorage
export {
    fetchGuildBonuses,
    fetchCollectionPercentages,
    fetchEquppedGear,
    fetchCollectionGear,
}
import state from './state.js'

const fetchLocalStorage = () => {
    console.log('here')
    fetchGuildBonuses()
    fetchCollectionPercentages()
    fetchEquppedGear()
    fetchCollectionGear()
}

const fetchGuildBonuses = () => {
    if(typeof(localStorage.getItem('guildBonuses')) === 'string') {
        
        console.log(JSON.parse(localStorage.getItem('guildBonuses')))
        state.guildBonuses = JSON.parse(localStorage.getItem('guildBonuses'))
    }
}

const fetchCollectionPercentages = () => {
    if(typeof(localStorage.getItem('collectionPercentages')) === 'string') {
        state.collectionPercentages = JSON.parse(localStorage.getItem('collectionPercentages'))
    }
}

const fetchEquppedGear = () => {
    if(typeof(localStorage.getItem('equppedGear')) === 'string') {
        state.equppedGear = JSON.parse(localStorage.getItem('equppedGear'))
    }
}

const fetchCollectionGear = () => {
    if(typeof(localStorage.getItem('collectionGear')) === 'string') {
        state.collectionGear = JSON.parse(localStorage.getItem('collectionGear'))
    }
}

export default fetchLocalStorage
export {
    fetchGuildBonuses,
    fetchCollectionPercentages,
    fetchEquppedGear,
    fetchCollectionGear,
}
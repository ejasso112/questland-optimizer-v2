import state from './state.js'

const storeGuildBonuses = () => {
    localStorage.setItem('guildBonuses', JSON.stringify(state.guildBonuses))
}

const storeCollectionPercentages = () => {
    localStorage.setItem('collectionPercentages', JSON.stringify(state.collectionPercentages))
}

const storeEquppedGear = () => {
    localStorage.setItem('equppedGear', JSON.stringify(state.equppedGear))
}

const storeCollectionGear = () => {
    localStorage.setItem('collectionGear', JSON.stringify(state.collectionGear))
}
export {
    storeGuildBonuses,
    storeCollectionPercentages,
    storeEquppedGear,
    storeCollectionGear,
}
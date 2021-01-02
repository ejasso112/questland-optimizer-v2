import state from './state.js'
import calcCollectionGearFinalStats from './calcCollectionGearFinalStats.js'

const OptimizeCollections = () => {
    calcCollectionGearFinalStats(state.collectionGear)
    optiomizeCollectionMaxPower()
}

const optiomizeCollectionMaxPower = () => {
    console.log(state.collectionGearFinalStats)
}

export const optimizeCollectionsListener = () => {
    document.querySelector('#characterInfo__form').addEventListener('submit', OptimizeCollections)
}
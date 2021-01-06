import state from './state.js'
import calcCollectionGearFinalStats from './calcCollectionGearFinalStats.js'

const OptimizeCollections = () => {
    calcCollectionGearFinalStats(state.collectionGear)
    optiomizeCollectionMaxPower()
    displayResults()
}

const optiomizeCollectionMaxPower = () => {
    let changed = true

    while(changed) {
        changed = false
        for(let i = 1; i <= 20; i++) {
            for(let l = 1; l <= 20; l++) {
                if(l !== i) {
                    if(swapGear(`slot${i}`, `slot${l}`)) {
                        changed = true
                    }
                }
            }
        }
    }
}

const swapGear = (currSlot, otherSlot) => {
    const currSlotPrecentage = state.collectionPercentages[currSlot]
    const currSlotStats = state.collectionGearFinalStats[currSlot]
    const otherSlotPrecentage = state.collectionPercentages[otherSlot]
    const otherSlotStats = state.collectionGearFinalStats[otherSlot]

    const currGearDefaultActiveStat = (currSlotPrecentage.type === 'attack' ? currSlotStats.attack :
        currSlotPrecentage.type === 'defense' ? currSlotStats.defense :
        currSlotPrecentage.type === 'magic' ? currSlotStats.magic :
        currSlotPrecentage.type === 'health' && currSlotStats.health
    ) * currSlotPrecentage.value / 100

    const currGearOtherActiveStat = (otherSlotPrecentage.type === 'attack' ? currSlotStats.attack :
        otherSlotPrecentage.type === 'defense' ? currSlotStats.defense :
        otherSlotPrecentage.type === 'magic' ? currSlotStats.magic :
        otherSlotPrecentage.type === 'health' && currSlotStats.health
    ) * otherSlotPrecentage.value / 100

    const otherGearDefaultActiveStat = (otherSlotPrecentage.type === 'attack' ? otherSlotStats.attack :
        otherSlotPrecentage.type === 'defense' ? otherSlotStats.defense :
        otherSlotPrecentage.type === 'magic' ? otherSlotStats.magic :
        otherSlotPrecentage.type === 'health' && otherSlotStats.health
    ) * otherSlotPrecentage.value / 100

    const otherGearCurrActiveStat = (currSlotPrecentage.type === 'attack' ? otherSlotStats.attack :
        currSlotPrecentage.type === 'defense' ? otherSlotStats.defense :
        currSlotPrecentage.type === 'magic' ? otherSlotStats.magic :
        currSlotPrecentage.type === 'health' && otherSlotStats.health
    ) * currSlotPrecentage.value / 100

    const defaultActiveStatSum = currGearDefaultActiveStat + otherGearDefaultActiveStat
    const otherActiveStatSum = currGearOtherActiveStat + otherGearCurrActiveStat

    if (defaultActiveStatSum < otherActiveStatSum) {
        console.log('swap')
        const temp = currSlotStats
        state.collectionGearFinalStats[currSlot] = otherSlotStats
        state.collectionGearFinalStats[otherSlot] = temp

        return true
    }
    else {
        return false
    }
}

const displayResults = () => {
    for(let i = 1; i <=10; i++) {
        $(`#collection1Result${i}`).val(state.collectionGearFinalStats[`slot${i}`].value)
        $(`#collection2Result${i}`).val(state.collectionGearFinalStats[`slot${i + 10}`].value)
    }
}

export const optimizeCollectionsListener = () => {
    document.querySelector('#characterInfo__form').addEventListener('submit', OptimizeCollections)
}
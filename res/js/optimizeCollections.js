import state from './state.js'
import calcCollectionGearFinalStats from './calcCollectionGearFinalStats.js'

const OptimizeCollections = () => {
    optiomizeCollectionBuild($('input[name="build"]:checked').val())
    calcCollectionGearFinalStats()

    optiomizeCollectionMaxPower()
    displayResults()
}

const optiomizeCollectionBuild = (type) => {
    let optimizedEquippedGear = {
        HELM: null,
        CHEST: null,
        GLOVES: null,
        BOOTS: null,
        TALISMAN: null,
        NECKLACE: null,
        RING: null,
    }

    if (type !== 'none') {
        const itemBonus = type === 'attackHealth' ? 'ATTACK' : 'MAGIC'
        const orbBonus = type === 'attackHealth' ? 'HEALTH' : 'DEFENSE'

        for (let i = 1; i <= 7; i++) {
            const gear = state.equppedGear[`slot${i}`]

            if (gear.itemBonus === itemBonus && gear.orbBonus === orbBonus) {
                optimizedEquippedGear.HELM = gear.itemSlot === 'HELM' ? gear : optimizedEquippedGear.HELM
                optimizedEquippedGear.CHEST =  gear.itemSlot === 'CHEST' ? gear : optimizedEquippedGear.CHEST
                optimizedEquippedGear.GLOVES =  gear.itemSlot === 'GLOVES' ? gear : optimizedEquippedGear.GLOVES
                optimizedEquippedGear.BOOTS =  gear.itemSlot === 'BOOTS' ? gear : optimizedEquippedGear.BOOTS
                optimizedEquippedGear.TALISMAN =  gear.itemSlot === 'TALISMAN' ? gear : optimizedEquippedGear.TALISMAN
                optimizedEquippedGear.NECKLACE =  gear.itemSlot === 'NECKLACE' ? gear : optimizedEquippedGear.NECKLACE
                optimizedEquippedGear.RING =  gear.itemSlot === 'RING' ? gear : optimizedEquippedGear.RING
            }
        }

        for (let i = 1; i <= 20; i++) {
            const gear = state.collectionGear[`slot${i}`]

            if (gear.itemBonus === itemBonus && gear.orbBonus === orbBonus) {
                optimizedEquippedGear.HELM = optimizedEquippedGear.HELM === null && gear.itemSlot === 'HELM' ? gear :
                gear.itemSlot === 'HELM' && (gear.attack + gear.health) > (optimizedEquippedGear.HELM.attack + optimizedEquippedGear.HELM.health) ? gear :
                optimizedEquippedGear.HELM

                optimizedEquippedGear.CHEST = optimizedEquippedGear.CHEST === null && gear.itemSlot === 'CHEST' ? gear :
                gear.itemSlot === 'CHEST' && (gear.attack + gear.health) > (optimizedEquippedGear.CHEST.attack + optimizedEquippedGear.CHEST.health) ? gear :
                optimizedEquippedGear.CHEST

                optimizedEquippedGear.GLOVES = optimizedEquippedGear.GLOVES === null && gear.itemSlot === 'GLOVES' ? gear :
                gear.itemSlot === 'GLOVES' && (gear.attack + gear.health) > (optimizedEquippedGear.GLOVES.attack + optimizedEquippedGear.GLOVES.health) ? gear :
                optimizedEquippedGear.GLOVES

                optimizedEquippedGear.BOOTS = optimizedEquippedGear.BOOTS === null && gear.itemSlot === 'BOOTS' ? gear :
                gear.itemSlot === 'BOOTS' && (gear.attack + gear.health) > (optimizedEquippedGear.BOOTS.attack + optimizedEquippedGear.BOOTS.health) ? gear :
                optimizedEquippedGear.BOOTS

                optimizedEquippedGear.TALISMAN = optimizedEquippedGear.TALISMAN === null && gear.itemSlot === 'TALISMAN' ? gear :
                gear.itemSlot === 'TALISMAN' && (gear.attack + gear.health) > (optimizedEquippedGear.TALISMAN.attack + optimizedEquippedGear.TALISMAN.health) ? gear :
                optimizedEquippedGear.TALISMAN

                optimizedEquippedGear.NECKLACE = optimizedEquippedGear.NECKLACE === null && gear.itemSlot === 'NECKLACE' ? gear :
                gear.itemSlot === 'NECKLACE' && (gear.attack + gear.health) > (optimizedEquippedGear.NECKLACE.attack + optimizedEquippedGear.NECKLACE.health) ? gear :
                optimizedEquippedGear.NECKLACE

                optimizedEquippedGear.RING = optimizedEquippedGear.RING === null && gear.itemSlot === 'RING' ? gear :
                gear.itemSlot === 'RING' && (gear.attack + gear.health) > (optimizedEquippedGear.RING.attack + optimizedEquippedGear.RING.health) ? gear :
                optimizedEquippedGear.RING
            }
        }

        state.equppedGearChanged = {
            slot1: {...optimizedEquippedGear[`${state.equppedGear.slot1.itemSlot}`]},
            slot2: {...optimizedEquippedGear[`${state.equppedGear.slot2.itemSlot}`]},
            slot3: {...optimizedEquippedGear[`${state.equppedGear.slot3.itemSlot}`]},
            slot4: {...optimizedEquippedGear[`${state.equppedGear.slot4.itemSlot}`]},
            slot5: {...optimizedEquippedGear[`${state.equppedGear.slot5.itemSlot}`]},
            slot6: {...optimizedEquippedGear[`${state.equppedGear.slot6.itemSlot}`]},
            slot7: {...optimizedEquippedGear[`${state.equppedGear.slot7.itemSlot}`]},
        }
        state.collectionGearChanged = {...state.collectionGear}

        for (let i = 1; i <= 20; i++) {
            const collectionGear = state.collectionGearChanged[`slot${i}`]

            for (let l = 1; l <= 7; l++) {
                const equppedGear = state.equppedGearChanged[`slot${l}`]

                if(collectionGear.value === equppedGear.value) {
                    state.collectionGearChanged[`slot${i}`] = {...state.equppedGear[`slot${l}`]}
                }
            }
        }


    }
    else {
        state.equppedGearChanged = {...state.equppedGear}
        state.collectionGearChanged = {...state.collectionGear}
    }
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
    const type = $('input[name="priority"]:checked').val()
    const priority = type === 'none' ? {attack: 1, defense: 1, health: 1, magic: 1} :
    type === 'red' ? {attack: 1, defense: 3, health: 2, magic: 4} :
    type === 'blue' ? {attack: 4, defense: 3, health: 2, magic: 1} :
    {attack: Number($('#attackPriority').val()), defense: Number($('#defensePriority').val()), health: Number($('#healthPriority').val()), magic: Number($('#magicPriority').val())}
    
    const currSlotPrecentage = state.collectionPercentages[currSlot]
    const currSlotStats = state.collectionGearFinalStats[currSlot]
    const currSlotPriority = priority[`${currSlotPrecentage.type}`]
    const otherSlotPrecentage = state.collectionPercentages[otherSlot]
    const otherSlotStats = state.collectionGearFinalStats[otherSlot]
    const otherSlotPriority = priority[`${otherSlotPrecentage.type}`]

    const currGearDefaultActiveStat = currSlotStats[`${currSlotPrecentage.type}`] * currSlotPrecentage.value / 100
    const currGearOtherActiveStat = currSlotStats[`${otherSlotPrecentage.type}`] * otherSlotPrecentage.value / 100
    const otherGearDefaultActiveStat = otherSlotStats[`${otherSlotPrecentage.type}`] * otherSlotPrecentage.value / 100
    const otherGearCurrActiveStat = otherSlotStats[`${currSlotPrecentage.type}`] * currSlotPrecentage.value / 100

    const defaultActiveStatSum = currGearDefaultActiveStat + otherGearDefaultActiveStat
    const otherActiveStatSum = currGearOtherActiveStat + otherGearCurrActiveStat
    
    if (currSlotPriority < otherSlotPriority && currGearDefaultActiveStat < otherGearCurrActiveStat) {
        const temp = currSlotStats
        state.collectionGearFinalStats[currSlot] = otherSlotStats
        state.collectionGearFinalStats[otherSlot] = temp

        return true
    }
    else if (currSlotPriority === otherSlotPriority && defaultActiveStatSum < otherActiveStatSum) {
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
    for (let i = 1; i <= 7; i++) {
        const gear = state.equppedGearChanged[`slot${i}`]

        const helm = gear.itemSlot === 'HELM' ? gear.value : $(`#equippedHelm`).val()
        $(`#equippedHelm`).val(helm)
        const chest =  gear.itemSlot === 'CHEST' ? gear.value : $(`#equippedChest`).val()
        $(`#equippedChest`).val(chest)
        const gloves =  gear.itemSlot === 'GLOVES' ? gear.value : $(`#equippedGloves`).val()
        $(`#equippedGloves`).val(gloves)
        const boots =  gear.itemSlot === 'BOOTS' ? gear.value : $(`#equippedBoots`).val()
        $(`#equippedBoots`).val(boots)
        const talisman =  gear.itemSlot === 'TALISMAN' ? gear.value : $(`#equippedTalisman`).val()
        $(`#equippedTalisman`).val(talisman)
        const necklace =  gear.itemSlot === 'NECKLACE' ? gear.value : $(`#equippedNacklace`).val()
        $(`#equippedNacklace`).val(necklace)
        const ring =  gear.itemSlot === 'RING' ? gear.value : $(`#equippedRing`).val()
        $(`#equippedRing`).val(ring)
    }
}

export const optimizeCollectionsListener = () => {
    document.querySelector('#characterInfo__form').addEventListener('submit', OptimizeCollections)
}
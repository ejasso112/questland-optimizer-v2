import state from './state.js'

const updateGuildBonuses = () => {
    const guildBonuses = document.getElementsByClassName('optimizer__guildBonuses__value')

    state.guildBonuses = {
        attack: guildBonuses[0].value,
        defense: guildBonuses[1].value,
        health: guildBonuses[2].value,
        magic: guildBonuses[3].value,
    }
}

const updateCollection1Percentages = () => {
    const collection1Percentages = document.getElementsByClassName('optimizer__collectionPercentages__value1')

    state.collection1Percentages = {
        0: { type: 'magic', value: collection1Percentages[1].value },
        1: { type: 'health', value: collection1Percentages[2].value },
        2: { type: 'defense', value: collection1Percentages[4].value },
        3: { type: 'attack', value: collection1Percentages[6].value },
        4: { type: 'magic', value: collection1Percentages[9].value },
        5: { type: 'health', value: collection1Percentages[8].value },
        6: { type: 'defense', value: collection1Percentages[7].value },
        7: { type: 'attack', value: collection1Percentages[5].value },
        8: { type: 'magic', value: collection1Percentages[3].value },
        9: { type: 'health', value: collection1Percentages[0].value },
    }
}

const updateCollection2Percentages = () => {
    const collection2Percentages = document.getElementsByClassName('optimizer__collectionPercentages__value2')

    state.collection2Percentages = {
        0: { type: 'defense', value: collection2Percentages[1].value },
        1: { type: 'attack', value: collection2Percentages[2].value },
        2: { type: 'magic', value: collection2Percentages[4].value },
        3: { type: 'health', value: collection2Percentages[6].value },
        4: { type: 'defense', value: collection2Percentages[9].value },
        5: { type: 'attack', value: collection2Percentages[8].value },
        6: { type: 'magic', value: collection2Percentages[7].value },
        7: { type: 'health', value: collection2Percentages[5].value },
        8: { type: 'defense', value: collection2Percentages[3].value },
        9: { type: 'attack', value: collection2Percentages[0].value },
    }
}

const updateEquippedGear = () => {
    const equippedGear = document.getElementsByClassName('optimizer__equippedGear__selection')
    state.equippedGear = {
        0: { id: equippedGear[0].options[equippedGear[0].selectedIndex].id },
        1: { id: equippedGear[1].options[equippedGear[1].selectedIndex].id },
        2: { id: equippedGear[2].options[equippedGear[2].selectedIndex].id },
        3: { id: equippedGear[3].options[equippedGear[3].selectedIndex].id },
        4: { id: equippedGear[4].options[equippedGear[4].selectedIndex].id },
        5: { id: equippedGear[5].options[equippedGear[5].selectedIndex].id },
        6: { id: equippedGear[6].options[equippedGear[6].selectedIndex].id },
    }
}

const updateCollectionGear = () => {
    const collectionGear = document.getElementsByClassName('optimizer__collectionGear__selection')
    const collectionAwakeBoost = document.getElementsByClassName('optimizer__collectionGear__input')
    state.collectionGear = {
        0: {
            id: collectionGear[0].options[collectionGear[0].selectedIndex].id,
            awake: collectionAwakeBoost[0].value,
            boost: collectionAwakeBoost[1].value,
        },
        1: {
            id: collectionGear[1].options[collectionGear[1].selectedIndex].id,
            awake: collectionAwakeBoost[2].value,
            boost: collectionAwakeBoost[3].value,
        },
        2: {
            id: collectionGear[2].options[collectionGear[2].selectedIndex].id,
            awake: collectionAwakeBoost[4].value,
            boost: collectionAwakeBoost[5].value,
        },
        3: {
            id: collectionGear[3].options[collectionGear[3].selectedIndex].id,
            awake: collectionAwakeBoost[6].value,
            boost: collectionAwakeBoost[7].value,
        },
        4: {
            id: collectionGear[4].options[collectionGear[4].selectedIndex].id,
            awake: collectionAwakeBoost[8].value,
            boost: collectionAwakeBoost[9].value,
        },
        5: {
            id: collectionGear[5].options[collectionGear[5].selectedIndex].id,
            awake: collectionAwakeBoost[10].value,
            boost: collectionAwakeBoost[11].value,
        },
        6: {
            id: collectionGear[6].options[collectionGear[6].selectedIndex].id,
            awake: collectionAwakeBoost[12].value,
            boost: collectionAwakeBoost[13].value,
        },
        7: {
            id: collectionGear[7].options[collectionGear[7].selectedIndex].id,
            awake: collectionAwakeBoost[14].value,
            boost: collectionAwakeBoost[15].value,
        },
        8: {
            id: collectionGear[8].options[collectionGear[8].selectedIndex].id,
            awake: collectionAwakeBoost[16].value,
            boost: collectionAwakeBoost[17].value,
        },
        9: {
            id: collectionGear[9].options[collectionGear[9].selectedIndex].id,
            awake: collectionAwakeBoost[18].value,
            boost: collectionAwakeBoost[19].value,
        },
        10: {
            id: collectionGear[10].options[collectionGear[10].selectedIndex].id,
            awake: collectionAwakeBoost[20].value,
            boost: collectionAwakeBoost[21].value,
        },
        11: {
            id: collectionGear[11].options[collectionGear[11].selectedIndex].id,
            awake: collectionAwakeBoost[22].value,
            boost: collectionAwakeBoost[23].value,
        },
        12: {
            id: collectionGear[12].options[collectionGear[12].selectedIndex].id,
            awake: collectionAwakeBoost[24].value,
            boost: collectionAwakeBoost[25].value,
        },
        13: {
            id: collectionGear[13].options[collectionGear[13].selectedIndex].id,
            awake: collectionAwakeBoost[26].value,
            boost: collectionAwakeBoost[27].value,
        },
        14: {
            id: collectionGear[14].options[collectionGear[14].selectedIndex].id,
            awake: collectionAwakeBoost[28].value,
            boost: collectionAwakeBoost[29].value,
        },
        15: {
            id: collectionGear[15].options[collectionGear[15].selectedIndex].id,
            awake: collectionAwakeBoost[30].value,
            boost: collectionAwakeBoost[31].value,
        },
        16: {
            id: collectionGear[16].options[collectionGear[16].selectedIndex].id,
            awake: collectionAwakeBoost[32].value,
            boost: collectionAwakeBoost[33].value,
        },
        17: {
            id: collectionGear[17].options[collectionGear[17].selectedIndex].id,
            awake: collectionAwakeBoost[34].value,
            boost: collectionAwakeBoost[35].value,
        },
        18: {
            id: collectionGear[18].options[collectionGear[18].selectedIndex].id,
            awake: collectionAwakeBoost[36].value,
            boost: collectionAwakeBoost[37].value,
        },
        19: {
            id: collectionGear[19].options[collectionGear[19].selectedIndex].id,
            awake: collectionAwakeBoost[38].value,
            boost: collectionAwakeBoost[39].value,
        },
    }
}

export const updateInputsEventlisteners = () => {
    document.querySelectorAll('.optimizer__guildBonuses__value').forEach(item => {
        item.addEventListener('change', updateGuildBonuses)
    })
    document.querySelectorAll('.optimizer__collectionPercentages__value1').forEach(item => {
        item.addEventListener('change', updateCollection1Percentages)
    })
    document.querySelectorAll('.optimizer__collectionPercentages__value2').forEach(item => {
        item.addEventListener('change', updateCollection2Percentages)
    })
    document.querySelectorAll('.optimizer__equippedGear__selection').forEach(item => {
        item.addEventListener('change', updateEquippedGear)
    })
    document.querySelectorAll('.optimizer__collectionGear__selection').forEach(item => {
        item.addEventListener('change', updateCollectionGear)
    })
    document.querySelectorAll('.optimizer__collectionGear__input').forEach(item => {
        item.addEventListener('change', updateCollectionGear)
    })
}
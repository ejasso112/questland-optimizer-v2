import state from './state.js'
import { storeGuildBonuses, storeCollectionPercentages, storeEquppedGear, storeCollectionGear } from './storeInputs.js'
import calcLinks from './calcLinks.js'
import { displayLinks } from './displayInputs.js'

const updateGuildBonuses = () => {
    state.guildBonuses = {
        attack: $('#attackGuildBonus').val(),
        defense: $('#defenseGuildBonus').val(),
        health: $('#healthGuildBonus').val(),
        magic: $('#magicGuildBonus').val(),
    }

    storeGuildBonuses()
    
}

const updateCollectionPercentages = () => {
    state.collectionPercentages = {
        slot1: { type: 'magic', value: $('#collection1Item1').val() },
        slot2: { type: 'health', value: $('#collection1Item2').val() },
        slot3: { type: 'defense', value: $('#collection1Item3').val() },
        slot4: { type: 'attack', value: $('#collection1Item4').val() },
        slot5: { type: 'magic', value: $('#collection1Item5').val() },
        slot6: { type: 'health', value: $('#collection1Item6').val() },
        slot7: { type: 'defense', value: $('#collection1Item7').val() },
        slot8: { type: 'attack', value: $('#collection1Item8').val() },
        slot9: { type: 'magic', value: $('#collection1Item9').val() },
        slot10: { type: 'health', value: $('#collection1Item10').val() },
        slot11: { type: 'defense', value: $('#collection2Item1').val() },
        slot12: { type: 'attack', value: $('#collection2Item2').val() },
        slot13: { type: 'magic', value: $('#collection2Item3').val() },
        slot14: { type: 'health', value: $('#collection2Item4').val() },
        slot15: { type: 'defense', value: $('#collection2Item5').val() },
        slot16: { type: 'attack', value: $('#collection2Item6').val() },
        slot17: { type: 'magic', value: $('#collection2Item7').val() },
        slot18: { type: 'health', value: $('#collection2Item8').val() },
        slot19: { type: 'defense', value: $('#collection2Item9').val() },
        slot20: { type: 'attack', value: $('#collection2Item10').val() },
    }

    storeCollectionPercentages()
}

const updateEquippedGear = (pos) => {
    const name = $(`#equippedGear${pos}`).val()
    const awakeLvl = $(`#equippedAwake${pos}`).val()
    const artifact = `ARTIFACT${awakeLvl}`


    const gear = awakeLvl > 0 ? state.gearSorted.filter(value => value.name === name && value.quality === artifact)[0] :
    state.gearSorted.filter(value => value.name === name && value.quality !== 'ARTIFACT1' && value.quality !== 'ARTIFACT2' && value.quality !== 'ARTIFACT3' && value.quality !== 'ARTIFACT4' && value.quality !== 'ARTIFACT5' && value.quality !== 'ARTIFACT6' && value.quality !== 'ARTIFACT7')[0]

    const baseGearId = state.gearSorted.filter(value => value.name === name && value.quality !== 'ARTIFACT1' && value.quality !== 'ARTIFACT2' && value.quality !== 'ARTIFACT3' && value.quality !== 'ARTIFACT4' && value.quality !== 'ARTIFACT5' && value.quality !== 'ARTIFACT6' && value.quality !== 'ARTIFACT7')[0].id

    state.equppedGear[`slot${pos}`] = {
        id: gear.id,
        baseId: baseGearId,
        value: gear.name,
        attack: gear.attack,
        defense: gear.defense,
        health: gear.health,
        magic: gear.magic,
        itemBonus: gear.itemBonus,
        orbBonus: gear.orbBonus,
        itemLink1: gear.itemLink1,
        itemLink2: gear.itemLink2,
        itemLink3: gear.itemLink3,
        itemSlot: gear.itemSlot,
        artifact: gear.quality === 'ARTIFACT5' ? 5 : gear.quality === 'ARTIFACT4' ? 4 : gear.quality === 'ARTIFACT3' ? 3 : gear.quality === 'ARTIFACT2' ? 2 : gear.quality === 'ARTIFACT1' ? 1 : 0,
        links: 0,
    }
    calcLinks()
    storeEquppedGear()
    displayLinks()
}

const updateCollectionGear = (pos) => {
    const name = $(`#collectionGear${pos}`).val()
    const awakeLvl = $(`#collectionAwake${pos}`).val()
    const artifact = `ARTIFACT${awakeLvl}`


    const gear = awakeLvl > 0 ? state.gearSorted.filter(value => value.name === name && value.quality === artifact)[0] :
    state.gearSorted.filter(value => value.name === name && value.quality !== 'ARTIFACT1' && value.quality !== 'ARTIFACT2' && value.quality !== 'ARTIFACT3' && value.quality !== 'ARTIFACT4' && value.quality !== 'ARTIFACT5' && value.quality !== 'ARTIFACT6' && value.quality !== 'ARTIFACT7')[0]
    
    const baseGearId = state.gearSorted.filter(value => value.name === name && value.quality !== 'ARTIFACT1' && value.quality !== 'ARTIFACT2' && value.quality !== 'ARTIFACT3' && value.quality !== 'ARTIFACT4' && value.quality !== 'ARTIFACT5' && value.quality !== 'ARTIFACT6' && value.quality !== 'ARTIFACT7')[0].id
    
    state.collectionGear[`slot${pos}`] = {
        id: gear.id,
        baseId: baseGearId,
        value: gear.name,
        attack: gear.attack,
        defense: gear.defense,
        health: gear.health,
        magic: gear.magic,
        itemBonus: gear.itemBonus,
        orbBonus: gear.orbBonus,
        itemLink1: gear.itemLink1,
        itemLink2: gear.itemLink2,
        itemLink3: gear.itemLink3,
        itemSlot: gear.itemSlot,
        artifact: gear.quality === 'ARTIFACT5' ? 5 : gear.quality === 'ARTIFACT4' ? 4 : gear.quality === 'ARTIFACT3' ? 3 : gear.quality === 'ARTIFACT2' ? 2 : gear.quality === 'ARTIFACT1' ? 1 : 0,
        links: 0,
    }
    
    calcLinks()      
    storeCollectionGear()
    displayLinks()
}

export const updateInputsEventlisteners = () => {
    document.querySelector('#attackGuildBonus').addEventListener('change', updateGuildBonuses)
    document.querySelector('#defenseGuildBonus').addEventListener('change', updateGuildBonuses)
    document.querySelector('#healthGuildBonus').addEventListener('change', updateGuildBonuses)
    document.querySelector('#magicGuildBonus').addEventListener('change', updateGuildBonuses)

    for(let i = 1; i <= 10; i++) {
        document.querySelector(`#collection1Item${i}`).addEventListener('change', updateCollectionPercentages)
        document.querySelector(`#collection2Item${i}`).addEventListener('change', updateCollectionPercentages)
    }

    for(let i = 1; i <= 7; i++) {
        document.querySelector(`#equippedGear${i}`).addEventListener('change', () => updateEquippedGear(i))
        document.querySelector(`#equippedAwake${i}`).addEventListener('change', () => updateEquippedGear(i))
    }
    for(let i = 1; i <= 20; i++) {
        document.querySelector(`#collectionGear${i}`).addEventListener('change', () => updateCollectionGear(i))
        document.querySelector(`#collectionAwake${i}`).addEventListener('change', () => updateCollectionGear(i))
    }
}
import state from './state.js'

const displayInputs = () => {
    displayGuildBonuses()
    displayCollectionPercentages()
    displayEquippedGear()
    displayCollectionGear()
}

const displayGuildBonuses = () => {
    $('#attackGuildBonus').val(state.guildBonuses.attack)
    $('#defenseGuildBonus').val(state.guildBonuses.defense)
    $('#healthGuildBonus').val(state.guildBonuses.health)
    $('#magicGuildBonus').val(state.guildBonuses.magic)
}

const displayCollectionPercentages = () => {
    $('#collection1Item1').val(state.collectionPercentages.slot1.value)
    $('#collection1Item2').val(state.collectionPercentages.slot2.value)
    $('#collection1Item3').val(state.collectionPercentages.slot3.value)
    $('#collection1Item4').val(state.collectionPercentages.slot4.value)
    $('#collection1Item5').val(state.collectionPercentages.slot5.value)
    $('#collection1Item6').val(state.collectionPercentages.slot6.value)
    $('#collection1Item7').val(state.collectionPercentages.slot7.value)
    $('#collection1Item8').val(state.collectionPercentages.slot8.value)
    $('#collection1Item9').val(state.collectionPercentages.slot9.value)
    $('#collection1Item10').val(state.collectionPercentages.slot10.value)
    $('#collection2Item1').val(state.collectionPercentages.slot11.value)
    $('#collection2Item2').val(state.collectionPercentages.slot12.value)
    $('#collection2Item3').val(state.collectionPercentages.slot13.value)
    $('#collection2Item4').val(state.collectionPercentages.slot14.value)
    $('#collection2Item5').val(state.collectionPercentages.slot15.value)
    $('#collection2Item6').val(state.collectionPercentages.slot16.value)
    $('#collection2Item7').val(state.collectionPercentages.slot17.value)
    $('#collection2Item8').val(state.collectionPercentages.slot18.value)
    $('#collection2Item9').val(state.collectionPercentages.slot19.value)
    $('#collection2Item10').val(state.collectionPercentages.slot20.value)
}

const displayEquippedGear = () => {
    for(let i = 1; i <= 7 ; i++) {
        $(`#equippedGear${i}`).val(state.equppedGear[`slot${i}`].value)
        $(`#equippedAwake${i}`).val(state.equppedGear[`slot${i}`].artifact)
    }
}

const displayCollectionGear = () => {
    for(let i = 1; i <= 20 ; i++) {
        $(`#collectionGear${i}`).val(state.collectionGear[`slot${i}`].value)
        $(`#collectionAwake${i}`).val(state.collectionGear[`slot${i}`].artifact)
    }
}

export default displayInputs
export {
    displayGuildBonuses,
    displayCollectionPercentages,
    displayEquippedGear,
    displayCollectionGear,
}
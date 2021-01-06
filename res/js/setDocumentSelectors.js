import state from './state.js'

const setDocumentSelectors = async () => {
    // Fill options for Select Elements
    for (let i = 0; i < state.gearSorted.length; i++) {
        if (
            state.gearSorted[i].quality !== 'ARTIFACT1' &&
            state.gearSorted[i].quality !== 'ARTIFACT2' &&
            state.gearSorted[i].quality !== 'ARTIFACT3' &&
            state.gearSorted[i].quality !== 'ARTIFACT4' &&
            state.gearSorted[i].quality !== 'ARTIFACT5' &&
            state.gearSorted[i].id !== 24105 &&
            state.gearSorted[i].id !== 24109 &&
            state.gearSorted[i].id !== 24111 &&
            state.gearSorted[i].id !== 24113 &&
            state.gearSorted[i].id !== 24115 &&
            state.gearSorted[i].id !== 24117
        ) {
            $('.optimize__optimizer__characterInfo__equippedGear__select').append(
                $('<option>', {
                    class: 'optimize__optimizer__characterInfo__equippedGear__option',
                    id: state.gearSorted[i].id,
                    value: state.gearSorted[i].name,
                    text: state.gearSorted[i].name,
                })
            )

            $('.optimize__optimizer__characterInfo__collectionGear__select').append(
                $('<option>', {
                    class: 'optimize__optimizer__characterInfo__collectionGear__select',
                    id: state.gearSorted[i].id,
                    value: state.gearSorted[i].name,
                    text: state.gearSorted[i].name,
                })
            )
        }
    }

    // Clone Equipped Gear Select Element
    $('#equippedGear1').clone().prop('id', 'equippedGear2').prependTo('#equippegGearField2')
    $('#equippedGear1').clone().prop('id', 'equippedGear3').prependTo('#equippegGearField3')
    $('#equippedGear1').clone().prop('id', 'equippedGear4').prependTo('#equippegGearField4')
    $('#equippedGear1').clone().prop('id', 'equippedGear5').prependTo('#equippegGearField5')
    $('#equippedGear1').clone().prop('id', 'equippedGear6').prependTo('#equippegGearField6')
    $('#equippedGear1').clone().prop('id', 'equippedGear7').prependTo('#equippegGearField7')

    $('#equippedGear1').clone().prop('id', 'collectionGear1').prependTo('#collectionGearField1')
    $('#equippedGear1').clone().prop('id', 'collectionGear2').prependTo('#collectionGearField2')
    $('#equippedGear1').clone().prop('id', 'collectionGear3').prependTo('#collectionGearField3')
    $('#equippedGear1').clone().prop('id', 'collectionGear4').prependTo('#collectionGearField4')
    $('#equippedGear1').clone().prop('id', 'collectionGear5').prependTo('#collectionGearField5')
    $('#equippedGear1').clone().prop('id', 'collectionGear6').prependTo('#collectionGearField6')
    $('#equippedGear1').clone().prop('id', 'collectionGear7').prependTo('#collectionGearField7')
    $('#equippedGear1').clone().prop('id', 'collectionGear8').prependTo('#collectionGearField8')
    $('#equippedGear1').clone().prop('id', 'collectionGear9').prependTo('#collectionGearField9')
    $('#equippedGear1').clone().prop('id', 'collectionGear10').prependTo('#collectionGearField10')
    $('#equippedGear1').clone().prop('id', 'collectionGear11').prependTo('#collectionGearField11')
    $('#equippedGear1').clone().prop('id', 'collectionGear12').prependTo('#collectionGearField12')
    $('#equippedGear1').clone().prop('id', 'collectionGear13').prependTo('#collectionGearField13')
    $('#equippedGear1').clone().prop('id', 'collectionGear14').prependTo('#collectionGearField14')
    $('#equippedGear1').clone().prop('id', 'collectionGear15').prependTo('#collectionGearField15')
    $('#equippedGear1').clone().prop('id', 'collectionGear16').prependTo('#collectionGearField16')
    $('#equippedGear1').clone().prop('id', 'collectionGear17').prependTo('#collectionGearField17')
    $('#equippedGear1').clone().prop('id', 'collectionGear18').prependTo('#collectionGearField18')
    $('#equippedGear1').clone().prop('id', 'collectionGear19').prependTo('#collectionGearField19')
    $('#equippedGear1').clone().prop('id', 'collectionGear20').prependTo('#collectionGearField20')
}

export default setDocumentSelectors

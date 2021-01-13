const options = () => {
    const priority = $('input[name="priority"]:checked').val()
    const build = $('input[name="build"]:checked').val()
    
    priority === 'custom' ? $('#customPriorityContent').css('display', 'block') : $('#customPriorityContent').css('display', 'none')
    build === 'none' ? $('#buildResults').css('display', 'none') : $('#buildResults').css('display', 'block')
}

const customPriority = (e, dir) => {
    if (dir === 'down') {
        let count = 0
        const curPriority = Number($(`#${e.target.name}`).val())
        const newPriority = curPriority + 1

        e.target.name !== 'attackPriority' && $('#attackPriority').val() == curPriority && count++
        e.target.name !== 'defensePriority' && $('#defensePriority').val() == curPriority && count++
        e.target.name !== 'healthPriority' && $('#healthPriority').val() == curPriority && count++
        e.target.name !== 'magicPriority' && $('#magicPriority').val() == curPriority && count++

        if (count > 0 && curPriority < 4) {
            $(`#${e.target.name}`).val(newPriority)

            // if (e.target.name === 'attackPriority') {
            //     $('#defensePriority').val() == newPriority ? $(`#attackPriorityField`).insertBefore($(`#defensePriorityField`)) :
            //     $('#healthPriority').val() == newPriority ? $(`#attackPriorityField`).insertBefore($(`#healthPriorityField`)) :
            //     $('#magicPriority').val() == newPriority ? $(`#attackPriorityField`).insertBefore($(`#magicPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#attackPriorityField`))
            // }
            // else if (e.target.name === 'defensePriority') {
            //     $('#attackPriority').val() == newPriority ? $(`#defensePriorityField`).insertAfter($(`#attackPriorityField`)) :
            //     $('#healthPriority').val() == newPriority ? $(`#defensePriorityField`).insertBefore($(`#healthPriorityField`)) :
            //     $('#magicPriority').val() == newPriority ? $(`#defensePriorityField`).insertBefore($(`#magicPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#defensePriorityField`))
            // }
            // else if (e.target.name === 'healthPriority') {
            //     $('#defensePriority').val() == newPriority ? $(`#healthPriorityField`).insertAfter($(`#defensePriorityField`)) :
            //     $('#attackPriority').val() == newPriority ? $(`#healthPriorityField`).insertAfter($(`#attackPriorityField`)) :
            //     $('#magicPriority').val() == newPriority ? $(`#healthPriorityField`).insertBefore($(`#magicPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#healthPriorityField`))
            // }
            // else if (e.target.name === 'magicPriority') {
            //     $('#healthPriority').val() == newPriority ? $(`#magicPriorityField`).insertBefore($(`#healthPriorityField`)) :
            //     $('#defensePriority').val() == newPriority ? $(`#magicPriorityField`).insertAfter($(`#defensePriorityField`)) :
            //     $('#attackPriority').val() == newPriority ? $(`#magicPriorityField`).insertAfter($(`#attackPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#magicPriorityField`))
            // }
        }
    }
    else if (dir === 'up') {
        let count = 0
        const curPriority = Number($(`#${e.target.name}`).val())
        const newPriority = curPriority - 1

        if (curPriority > 1) {
            e.target.name !== 'attackPriority' && $('#attackPriority').val() == curPriority && count++
            e.target.name !== 'defensePriority' && $('#defensePriority').val() == curPriority && count++
            e.target.name !== 'healthPriority' && $('#healthPriority').val() == curPriority && count++
            e.target.name !== 'magicPriority' && $('#magicPriority').val() == curPriority && count++

            count === 0 && Number($('#attackPriority').val()) > curPriority && $('#attackPriority').val(Number($('#attackPriority').val()) - 1)
            count === 0 && Number($('#defensePriority').val()) > curPriority && $('#defensePriority').val(Number($('#defensePriority').val()) - 1)
            count === 0 && Number($('#healthPriority').val()) > curPriority && $('#healthPriority').val(Number($('#healthPriority').val()) - 1)
            count === 0 && Number($('#magicPriority').val()) > curPriority && $('#magicPriority').val(Number($('#magicPriority').val()) - 1)

            $(`#${e.target.name}`).val(newPriority)
            // if (e.target.name === 'attackPriority') {
            //     $('#defensePriority').val() == newPriority ? $(`#attackPriorityField`).insertBefore($(`#defensePriorityField`)) :
            //     $('#healthPriority').val() == newPriority ? $(`#attackPriorityField`).insertBefore($(`#healthPriorityField`)) :
            //     $('#magicPriority').val() == newPriority ? $(`#attackPriorityField`).insertBefore($(`#magicPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#attackPriorityField`))
            // }
            // else if (e.target.name === 'defensePriority') {
            //     $('#attackPriority').val() == newPriority ? $(`#defensePriorityField`).insertAfter($(`#attackPriorityField`)) :
            //     $('#healthPriority').val() == newPriority ? $(`#defensePriorityField`).insertBefore($(`#healthPriorityField`)) :
            //     $('#magicPriority').val() == newPriority ? $(`#defensePriorityField`).insertBefore($(`#magicPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#defensePriorityField`))
            // }
            // else if (e.target.name === 'healthPriority') {
            //     $('#defensePriority').val() == newPriority ? $(`#healthPriorityField`).insertAfter($(`#defensePriorityField`)) :
            //     $('#attackPriority').val() == newPriority ? $(`#healthPriorityField`).insertAfter($(`#attackPriorityField`)) :
            //     $('#magicPriority').val() == newPriority ? $(`#healthPriorityField`).insertBefore($(`#magicPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#healthPriorityField`))
            // }
            // else if (e.target.name === 'magicPriority') {
            //     $('#healthPriority').val() == newPriority ? $(`#magicPriorityField`).insertBefore($(`#healthPriorityField`)) :
            //     $('#defensePriority').val() == newPriority ? $(`#magicPriorityField`).insertAfter($(`#defensePriorityField`)) :
            //     $('#attackPriority').val() == newPriority ? $(`#magicPriorityField`).insertAfter($(`#attackPriorityField`)) :
            //     $(`#customPriorityContent`).append($(`#magicPriorityField`))
            // }
        }
    }
    else return -1
}

export const optionsListeners = () => {
    $('input[type=radio][name=priority]').change(options)
    $('input[type=radio][name=build]').change(options)
    $('#attackPriorityUp').click((e) => customPriority(e,'up'))
    $('#attackPriorityDown').click((e) => customPriority(e,'down'))
    $('#defensePriorityUp').click((e) => customPriority(e,'up'))
    $('#defensePriorityDown').click((e) => customPriority(e,'down'))
    $('#healthPriorityUp').click((e) => customPriority(e,'up'))
    $('#healthPriorityDown').click((e) => customPriority(e,'down'))
    $('#magicPriorityUp').click((e) => customPriority(e,'up'))
    $('#magicPriorityDown').click((e) => customPriority(e,'down'))
}

export default options
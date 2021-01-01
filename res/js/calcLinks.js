import state from './state.js'

const calcLinks = () => {
    for (let i = 1; i <= 27; i++) {
        let links = 0
        let currGear
        if (i <= 7) {
            if(state.equppedGear[`slot${i}`] !== null) {
                currGear = state.equppedGear[`slot${i}`]
            }
        }
        else {
            if(state.collectionGear[`slot${i - 7}`] !== null) {
                currGear = state.collectionGear[`slot${i - 7}`]
            }
        }
        
        if(currGear) {
            for (let l = 1; l <= 27; l++) {
                let otherGear
                if (l <= 7 && l !== i) {
                    if(state.equppedGear[`slot${l}`] !== null) {
                        otherGear = state.equppedGear[`slot${l}`]
                    }
                }
                else if (l > 7 && l !== i){
                    if(state.collectionGear[`slot${l - 7}`] !== null) {
                        otherGear = state.collectionGear[`slot${l - 7}`]
                    }
                }
                
                if(otherGear) {
                    if(currGear.itemLink1 === otherGear.baseId)
                        links++
                    if(currGear.itemLink2 === otherGear.baseId)
                        links++
                    if(currGear.itemLink3 === otherGear.baseId)
                        links++
                    
                    
                }
            }
        }

        if (i <= 7) {
            if(state.equppedGear[`slot${i}`] !== null) {
                state.equppedGear[`slot${i}`].links = links
            }
        }
        else {
            if(state.collectionGear[`slot${i - 7}`] !== null) {
                state.collectionGear[`slot${i - 7}`].links = links
            }
        }
    }
}

export default calcLinks
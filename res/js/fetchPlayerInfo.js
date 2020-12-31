import state from './state.js'
import binarySearch from './binarySearch.js'

const fetchPlayerInfo = async () => {
    // Fetching Guild Data
    const urlGuild = `https://questland-public-api-dot-questland-tools.uc.r.appspot.com/guild/${$('#guildName').val()}?server=${$('#serverName').val()}`
    const resGuild = await fetch(urlGuild)
    const dataGuild = await resGuild.json()

    // Adding GuildBonuses to State
    state.guildBonuses = {
        attack: dataGuild.attackResearchLevel === null ? 0
            : dataGuild.attackResearchLevel <= 1 ? 0
            : dataGuild.attackResearchLevel === 2 ? 2
            : dataGuild.attackResearchLevel === 3 ? 4
            : dataGuild.attackResearchLevel + 2,

        defense: dataGuild.defenseResearchLevel === null ? 0
            : dataGuild.defenseResearchLevel <= 1 ? 0
            : dataGuild.defenseResearchLevel === 2 ? 2
            : dataGuild.defenseResearchLevel === 3 ? 4
            : dataGuild.defenseResearchLevel + 2,

        health: dataGuild.healthResearchLevel === null ? 0
            : dataGuild.healthResearchLevel <= 1 ? 0
            : dataGuild.healthResearchLevel === 2 ? 2
            : dataGuild.healthResearchLevel === 3 ? 4
            : dataGuild.healthResearchLevel + 2,

        magic: dataGuild.magicResearchLevel === null ? 0
            : dataGuild.magicResearchLevel <= 1 ? 0
            : dataGuild.magicResearchLevel === 2 ? 2
            : dataGuild.magicResearchLevel === 3 ? 4
            : dataGuild.magicResearchLevel + 2,
    }

    // Fetching Player Data
    const urlPlayer = `https://questland-public-api-dot-questland-tools.uc.r.appspot.com/hero/${$('#guildName').val()}/${$('#playerName').val()}?server=${$('#serverName').val()}`
    const resPlayer = await fetch(urlPlayer)
    const dataPlayer = await resPlayer.json()
    
    console.log(dataPlayer)
    // Adding Collection Percentages to State
    state.collectionPercentages = {
        slot0: { type: 'magic', value: dataPlayer.collection1Slots.slotUpgradePercentages[0] },
        slot1: { type: 'health', value: dataPlayer.collection1Slots.slotUpgradePercentages[1] },
        slot2: { type: 'defense', value: dataPlayer.collection1Slots.slotUpgradePercentages[2] },
        slot3: { type: 'attack', value: dataPlayer.collection1Slots.slotUpgradePercentages[3] },
        slot4: { type: 'magic', value: dataPlayer.collection1Slots.slotUpgradePercentages[4] },
        slot5: { type: 'health', value: dataPlayer.collection1Slots.slotUpgradePercentages[5] },
        slot6: { type: 'defense', value: dataPlayer.collection1Slots.slotUpgradePercentages[6] },
        slot7: { type: 'attack', value: dataPlayer.collection1Slots.slotUpgradePercentages[7] },
        slot8: { type: 'magic', value: dataPlayer.collection1Slots.slotUpgradePercentages[8] },
        slot9: { type: 'health', value: dataPlayer.collection1Slots.slotUpgradePercentages[9] },
        slot10: { type: 'defense', value: dataPlayer.collection2Slots.slotUpgradePercentages[0] },
        slot11: { type: 'attack', value: dataPlayer.collection2Slots.slotUpgradePercentages[1] },
        slot12: { type: 'magic', value: dataPlayer.collection2Slots.slotUpgradePercentages[2] },
        slot13: { type: 'health', value: dataPlayer.collection2Slots.slotUpgradePercentages[3] },
        slot14: { type: 'defense', value: dataPlayer.collection2Slots.slotUpgradePercentages[4] },
        slot15: { type: 'attack', value: dataPlayer.collection2Slots.slotUpgradePercentages[5] },
        slot16: { type: 'magic', value: dataPlayer.collection2Slots.slotUpgradePercentages[6] },
        slot17: { type: 'health', value: dataPlayer.collection2Slots.slotUpgradePercentages[7] },
        slot18: { type: 'defense', value: dataPlayer.collection2Slots.slotUpgradePercentages[8] },
        slot19: { type: 'attack', value: dataPlayer.collection2Slots.slotUpgradePercentages[9] },
    }

    // Adding Equpped Gear to State
    let gearObj = {}
    for (let i = 0; i < dataPlayer.equippedGear.length; i++) {
        const gear = binarySearch(dataPlayer.equippedGear[i].id)
        if (gear.itemSlot !== 'MAIN_HAND' && gear.itemSlot !== 'OFF_HAND') {
            gearObj[`slot${i}`] = {
                id: gear.id,
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
                artifact:
                    gear.quality === 'ARTIFACT5' ? 5 : gear.quality === 'ARTIFACT4' ? 4 : gear.quality === 'ARTIFACT3' ? 3 : gear.quality === 'ARTIFACT2' ? 2 : gear.quality === 'ARTIFACT1' ? 1 : 0,
            }
        }
    }
    state.equppedGear = gearObj

    //Adding Collection 1 Gear to State
    let collection1Obj = {}
    for (let i = 0; i < dataPlayer.collections1.length; i++) {
        const gear = binarySearch(dataPlayer.collections1[i].id)
        collection1Obj[`slot${dataPlayer.collections1[i].collectionPosition - 1}`] = {
            id: gear.id,
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
        }
    }

    //Adding Collection 2 Gear to State
    let collection2Obj = {}
    for (let i = 0; i < dataPlayer.collections2.length; i++) {
        const gear = binarySearch(dataPlayer.collections2[i].id)
        collection2Obj[`slot${dataPlayer.collections2[i].collectionPosition + 9}`] = {
            id: gear.id,
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
        }
    }
    state.collectionGear = {...collection1Obj,...collection2Obj}
}

export const fetchPlayerInfoListener = () => {
    document.querySelector('#playerInfo__form').addEventListener('submit', fetchPlayerInfo)
}
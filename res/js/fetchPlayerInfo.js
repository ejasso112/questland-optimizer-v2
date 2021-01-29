import state from './state.js'
import binarySearch from './binarySearch.js'
import { storeGuildBonuses, storeCollectionPercentages, storeEquppedGear, storeCollectionGear } from './storeInputs.js'
import calcLinks from './calcLinks.js'
import displayInputs from './displayInputs.js'

const fetchPlayerInfo = async () => {
    //Display Loading
    $('#playerInfoLoading').css('display', 'inline')

    // Fetching Guild Data
    const urlGuild = `https://questland-public-api-dot-questland-tools.uc.r.appspot.com/guild/${$('#guildName').val()}?server=${$('#serverName').val()}`
    const resGuild = await fetch(urlGuild)
    const dataGuild = await resGuild.json()

    // Adding GuildBonuses to State
    state.guildBonuses = {
        attack:
            dataGuild.attackResearchLevel === null
                ? 0
                : dataGuild.attackResearchLevel <= 1
                ? 0
                : dataGuild.attackResearchLevel === 2
                ? 2
                : dataGuild.attackResearchLevel === 3
                ? 4
                : dataGuild.attackResearchLevel + 2,

        defense:
            dataGuild.defenseResearchLevel === null
                ? 0
                : dataGuild.defenseResearchLevel <= 1
                ? 0
                : dataGuild.defenseResearchLevel === 2
                ? 2
                : dataGuild.defenseResearchLevel === 3
                ? 4
                : dataGuild.defenseResearchLevel + 2,

        health:
            dataGuild.healthResearchLevel === null
                ? 0
                : dataGuild.healthResearchLevel <= 1
                ? 0
                : dataGuild.healthResearchLevel === 2
                ? 2
                : dataGuild.healthResearchLevel === 3
                ? 4
                : dataGuild.healthResearchLevel + 2,

        magic:
            dataGuild.magicResearchLevel === null
                ? 0
                : dataGuild.magicResearchLevel <= 1
                ? 0
                : dataGuild.magicResearchLevel === 2
                ? 2
                : dataGuild.magicResearchLevel === 3
                ? 4
                : dataGuild.magicResearchLevel + 2,
    }
    storeGuildBonuses()

    // Fetching Player Data
    const urlPlayer = `https://questland-public-api-dot-questland-tools.uc.r.appspot.com/hero/${$('#guildName').val()}/${$('#playerName').val()}?server=${$('#serverName').val()}`
    const resPlayer = await fetch(urlPlayer)
    const dataPlayer = await resPlayer.json()

    console.log(dataPlayer)
    // Adding Collection Percentages to State
    state.collectionPercentages = {
        slot1: { type: 'magic', value: dataPlayer.collection1Slots.slotUpgradePercentages[0] },
        slot2: { type: 'health', value: dataPlayer.collection1Slots.slotUpgradePercentages[1] },
        slot3: { type: 'defense', value: dataPlayer.collection1Slots.slotUpgradePercentages[2] },
        slot4: { type: 'attack', value: dataPlayer.collection1Slots.slotUpgradePercentages[3] },
        slot5: { type: 'magic', value: dataPlayer.collection1Slots.slotUpgradePercentages[4] },
        slot6: { type: 'health', value: dataPlayer.collection1Slots.slotUpgradePercentages[5] },
        slot7: { type: 'defense', value: dataPlayer.collection1Slots.slotUpgradePercentages[6] },
        slot8: { type: 'attack', value: dataPlayer.collection1Slots.slotUpgradePercentages[7] },
        slot9: { type: 'magic', value: dataPlayer.collection1Slots.slotUpgradePercentages[8] },
        slot10: { type: 'health', value: dataPlayer.collection1Slots.slotUpgradePercentages[9] },
        slot11: { type: 'defense', value: dataPlayer.collection2Slots.slotUpgradePercentages[0] },
        slot12: { type: 'attack', value: dataPlayer.collection2Slots.slotUpgradePercentages[1] },
        slot13: { type: 'magic', value: dataPlayer.collection2Slots.slotUpgradePercentages[2] },
        slot14: { type: 'health', value: dataPlayer.collection2Slots.slotUpgradePercentages[3] },
        slot15: { type: 'defense', value: dataPlayer.collection2Slots.slotUpgradePercentages[4] },
        slot16: { type: 'attack', value: dataPlayer.collection2Slots.slotUpgradePercentages[5] },
        slot17: { type: 'magic', value: dataPlayer.collection2Slots.slotUpgradePercentages[6] },
        slot18: { type: 'health', value: dataPlayer.collection2Slots.slotUpgradePercentages[7] },
        slot19: { type: 'defense', value: dataPlayer.collection2Slots.slotUpgradePercentages[8] },
        slot20: { type: 'attack', value: dataPlayer.collection2Slots.slotUpgradePercentages[9] },
    }
    storeCollectionPercentages()

    // Adding Equpped Gear to State
    let gearObj = {}
    let slotVal = 1
    for (let i = 0; i < dataPlayer.equippedGear.length; i++) {
        const gear = binarySearch(state.gear, 'id', dataPlayer.equippedGear[i].id)
        const baseGearId = state.gearSorted.filter(
            value =>
                value.name === gear.name &&
                value.quality !== 'ARTIFACT1' &&
                value.quality !== 'ARTIFACT2' &&
                value.quality !== 'ARTIFACT3' &&
                value.quality !== 'ARTIFACT4' &&
                value.quality !== 'ARTIFACT5' &&
                value.quality !== 'ARTIFACT6' &&
                value.quality !== 'ARTIFACT7'
        )[0].id

        if (gear.itemSlot !== 'MAIN_HAND' && gear.itemSlot !== 'OFF_HAND') {
            gearObj[`slot${slotVal}`] = {
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
                artifact:
                    gear.quality === 'ARTIFACT5' ? 5 : gear.quality === 'ARTIFACT4' ? 4 : gear.quality === 'ARTIFACT3' ? 3 : gear.quality === 'ARTIFACT2' ? 2 : gear.quality === 'ARTIFACT1' ? 1 : 0,
                links: 0,
            }
            slotVal++
        }
    }
    state.equppedGear = gearObj

    // await calcLinks()

    //Adding Collection 1 Gear to State
    let collection1Obj = {}
    for (let i = 0; i < dataPlayer.collections1.length; i++) {
        const gear = binarySearch(state.gear, 'id', dataPlayer.collections1[i].id)
        const baseGearId = state.gearSorted.filter(
            value =>
                value.name === gear.name &&
                value.quality !== 'ARTIFACT1' &&
                value.quality !== 'ARTIFACT2' &&
                value.quality !== 'ARTIFACT3' &&
                value.quality !== 'ARTIFACT4' &&
                value.quality !== 'ARTIFACT5' &&
                value.quality !== 'ARTIFACT6' &&
                value.quality !== 'ARTIFACT7'
        )[0].id

        collection1Obj[`slot${dataPlayer.collections1[i].collectionPosition}`] = {
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
    }

    for (let i = 1; i <= 10; i++) {
        if (!collection1Obj[`slot${i}`]) {
            collection1Obj[`slot${i}`] = {
                id: 1,
                baseId: 1,
                value: 'Locked',
                attack: 0,
                defense: 0,
                health: 0,
                magic: 0,
                itemBonus: 'none',
                orbBonus: 'none',
                itemLink1: 'none',
                itemLink2: 'none',
                itemLink3: 'none',
                itemSlot: 'none',
                artifact: 0,
                links: 0,
            }
        }
    }
    //Adding Collection 2 Gear to State
    let collection2Obj = {}
    for (let i = 0; i < dataPlayer.collections2.length; i++) {
        const gear = binarySearch(state.gear, 'id', dataPlayer.collections2[i].id)
        const baseGearId = state.gearSorted.filter(
            value =>
                value.name === gear.name &&
                value.quality !== 'ARTIFACT1' &&
                value.quality !== 'ARTIFACT2' &&
                value.quality !== 'ARTIFACT3' &&
                value.quality !== 'ARTIFACT4' &&
                value.quality !== 'ARTIFACT5' &&
                value.quality !== 'ARTIFACT6' &&
                value.quality !== 'ARTIFACT7'
        )[0].id

        collection2Obj[`slot${dataPlayer.collections2[i].collectionPosition + 10}`] = {
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
    }

    for (let i = 11; i <= 20; i++) {
        if (!collection2Obj[`slot${i}`]) {
            collection2Obj[`slot${i}`] = {
                id: 1,
                baseId: 1,
                value: 'Locked',
                attack: 0,
                defense: 0,
                health: 0,
                magic: 0,
                itemBonus: 'none',
                orbBonus: 'none',
                itemLink1: 'none',
                itemLink2: 'none',
                itemLink3: 'none',
                itemSlot: 'none',
                artifact: 0,
                links: 0,
            }
        }
    }
    console.log(collection2Obj)
    state.collectionGear = { ...collection1Obj, ...collection2Obj }

    await calcLinks()

    storeEquppedGear()
    storeCollectionGear()

    displayInputs()

    //Display Loaded
    $('#playerInfoLoading').css('display', 'none')
    $('#playerInfoLoaded').css('display', 'inline')
}

export const fetchPlayerInfoListener = () => {
    document.querySelector('#playerInfo__form').addEventListener('submit', fetchPlayerInfo)
}

import state from './state.js'

const calcCollectionGearFinalStats = () => {
    for (let i = 1; i <= 20; i++) {
        const gear = state.collectionGearChanged[`slot${i}`]
    
        state.collectionGearFinalStats[`slot${i}`] = {
            id: gear.id,
            baseId: gear.baseId,
            value: gear.value,
            attack: gear.attack * (gear.links < 2 ? 1 : gear.itemBonus === 'ATTACK' ? 1.3 : 1) + (gear.attack * state.guildBonuses.attack / 100),
            defense: gear.defense * (gear.links < 2 ? 1 : gear.itemBonus === 'DEFENSE' ? 1.3 : 1) + (gear.defense * state.guildBonuses.defense / 100),
            magic: gear.magic * (gear.links < 2 ? 1 : gear.itemBonus === 'MAGIC' ? 1.3 : 1) + (gear.magic * state.guildBonuses.magic / 100),
            health: gear.health * (gear.links < 2 ? 1 : gear.itemBonus === 'HEALTH' ? 1.3 : 1) + (gear.health * state.guildBonuses.health / 100),
        }
    }
}

export default calcCollectionGearFinalStats
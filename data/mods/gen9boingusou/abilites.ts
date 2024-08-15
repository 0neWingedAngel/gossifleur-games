// bring other abilites not in this file
export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
		chaosburst: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fecto Elfilis' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.species.id === 'chaoselfilis' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Power Construct');
			pokemon.formeChange('Chaos Elfilis', this.effect, true);
			pokemon.baseMaxhp = Math.floor(Math.floor(
				2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
			) * pokemon.level / 100 + 10);
			const newMaxHP = pokemon.volatiles['dynamax'] ? (2 * pokemon.baseMaxhp) : pokemon.baseMaxhp;
			pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newMaxHP;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1},
		name: "Chaos Burst",
		rating: 5,
		num: 211,
	},
	solarize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fire';
        // is this what boosts moves affected by solarize? idk
				move.typeChangerBoosted = this.effect;
			}
		},
 		// idk wtf onBasePowerPriority is, so I ain't changing it
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
      	//same with this line
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Solarize",
		// do ratings ever even get used?
		rating: 4,
		num: 310,
	},
}

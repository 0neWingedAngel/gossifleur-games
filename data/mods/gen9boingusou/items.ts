export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
    delibirdite: {
		name: "Arbolivite",
		spritenum: 41,
		megaStone: "Arboliva-Mega",
		megaEvolves: "Arboliva",
		itemUser: ["Arboliva"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1887,
		gen: 9,
	 },
	delibirdite: {
		name: "Delibirdite",
		spritenum: 41,
		megaStone: "Delibird-Mega",
		megaEvolves: "Delibird",
		itemUser: ["Delibird"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 1888,
		gen: 9,
	}
}

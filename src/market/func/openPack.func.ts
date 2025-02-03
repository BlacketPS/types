import { NotFound } from "../../exception/enum/NotFound";
import type { Blook, Rarity } from "../../interfaces";

export type FastBlook = {
	id: number;
	chance: number;
    shinyChance: number;
}

export type ResponseBlook = {
    blookId: number;
    shiny: boolean;
}

function precalculateChances(blooks: FastBlook[]): FastBlook[] {
	const totalChance = blooks.reduce((acc, curr) => acc + curr.chance, 0);

	const chances: FastBlook[] = blooks.map((blook) => {
		return { id: blook.id, chance: (blook.chance / totalChance), shinyChance: blook.shinyChance }
	});

	return chances;
}

function open(blooks: FastBlook[]): ResponseBlook {
	let rand = Math.random() * (1 + Number.MIN_VALUE);

	for (const blook of blooks) {
		if ((rand -= blook.chance) < 0) {
            const shiny = Math.random() < blook.shinyChance;

            return {
                blookId: blook.id,
                shiny: shiny
            }
        }
	}
}

export async function openPack(blooks: Blook[], rarities: Rarity[], amount: number = 1, booster?: number, shinyBooster?: number): Promise<ResponseBlook[]> {
	if (!blooks.length) throw new Error(NotFound.UNKNOWN_PACK);

	const fastPackBlooksWithBooster = blooks.map((blook) => {
        const rarity = rarities.find((rarity) => rarity.id === blook.rarityId);

        return {
            id: blook.id,
            chance: blook.chance * ((rarity.affectedByBooster ? (booster ?? 1) : 1)),
            shinyChance: 0.001 * (shinyBooster ?? 1)
        }
	});

	const optimisedPackBlooks = precalculateChances(fastPackBlooksWithBooster);

	const res: ResponseBlook[] = [];

	for (let i = 0; i < amount; i++) {
		const blook = open(optimisedPackBlooks);

		res.push(blook);
	}

	return res;
}

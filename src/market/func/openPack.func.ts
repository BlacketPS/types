import { NotFound } from "../../exception/enum/NotFound";
import type { Blook } from "../../interfaces";

type FastBlook = {
	id: number;
	chance: number;
}

const precalculatedChances: Record<number, FastBlook[]> = {};

function precalculateChances(packId: number, packBlooks: Blook[]): FastBlook[] {
	if (precalculatedChances[packId]) return precalculatedChances[packId];

	const totalChance = packBlooks.reduce((acc, curr) => acc + curr.chance, 0);

	const chances: FastBlook[] = packBlooks.map((blook) => {
		return { id: blook.id, chance: (blook.chance / totalChance) }
	});

	precalculatedChances[packId] = chances;

	return chances;
}

function open(blooks: FastBlook[]): number {
	let rand = Math.random() * (1 + Number.MIN_VALUE);

	for (const blook of blooks) {
		if ((rand -= blook.chance) < 0) return blook.id;
	}
}

// TODO: implement booster chance manipulation
export async function openPack(packId: number, packBlooks: Blook[], booster: number, amount: number = 1): Promise<Record<number, number> | number> {
	if (!packBlooks.length) throw new Error(NotFound.UNKNOWN_PACK);

	const optimisedPackBlooks = precalculateChances(packId, packBlooks);

	if (optimisedPackBlooks.length === 1) {
		return optimisedPackBlooks[0].id;
	}

	if (amount === 1) {
		const blookId = open(optimisedPackBlooks);
		return blookId;
	}

	const res: Record<number, number> = {};

	for (let i = 0; i < amount; i++) {
		const blookId = open(optimisedPackBlooks);
		res[blookId] = (res[blookId] || 0) + 1;
	}

	return res;
}

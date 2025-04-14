import { GlobalBoost, PersonalBoost } from "../../";

export class DataBoostersEntity {
    global: {
        chance?: GlobalBoost
        shiny?: GlobalBoost
    }

    personal: {
        chance?: PersonalBoost
        shiny?: PersonalBoost
    }

    constructor(partial: Partial<DataBoostersEntity>) {
        Object.assign(this, partial);

        this.global.chance = new GlobalBoost(partial.global?.chance);
        this.global.shiny = new GlobalBoost(partial.global?.shiny);
    }
}

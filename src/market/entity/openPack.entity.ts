export class MarketOpenPackEntity {
    id: number;

    constructor(partial: Partial<MarketOpenPackEntity>) {
        Object.assign(this, partial);
    }
}

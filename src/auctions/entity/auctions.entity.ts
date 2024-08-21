import { Exclude } from "class-transformer";
import { Auction, AuctionTypeEnum } from "../..//interfaces";

export class AuctionsAuctionsEntity {
    id: number;
    type: AuctionTypeEnum;
    blookId?: number;
    itemId?: number;
    price: number;

    @Exclude()
    sellerId: string;

    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<AuctionsAuctionsEntity>) {
        Object.assign(this, partial);
    }
}


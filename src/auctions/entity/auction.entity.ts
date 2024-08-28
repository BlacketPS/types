import { Exclude } from "class-transformer";
import { AuctionBid, AuctionType, UserBlook, UserItem } from "../../interfaces";
import { PublicUser } from "../../users";

export class AuctionsAuctionEntity {
    id: number;

    @Exclude()
    sellerId: string = undefined;

    @Exclude()
    buyerId: string = undefined;

    @Exclude()
    itemId: number = undefined;

    @Exclude()
    blook?: UserBlook;

    item?: UserItem;

    type: AuctionType;

    blookId?: number;

    price: number;

    seller: PublicUser;

    buyItNow: boolean;

    bids: AuctionBid[];

    expiresAt: Date;

    constructor(partial: Partial<AuctionsAuctionEntity>) {
        Object.assign(this, partial);

        this.itemId = undefined;
        this.sellerId = undefined;
        this.seller = new PublicUser(partial.seller);
        this.buyerId = undefined;

        if (partial.blook) this.blookId = partial.blook.blookId;

        this.blook = undefined;
    }
}


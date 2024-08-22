import { Exclude } from "class-transformer";
import { AuctionBid, AuctionType, UserBlook, UserItem } from "../../interfaces";
import { PublicUser } from "../../users";

export class AuctionsAuctionEntity {
    id: number;

    @Exclude()
    sellerId: string;

    @Exclude()
    blook: UserBlook;

    @Exclude()
    item: UserItem;

    type: AuctionType;

    blookId?: number;

    itemId?: number;
    itemUsesLeft?: number;

    price: number;

    seller: PublicUser;

    buyItNow: boolean;

    bids: AuctionBid[];

    expiresAt: Date;

    constructor(partial: Partial<AuctionsAuctionEntity>) {
        Object.assign(this, partial);

        this.sellerId = undefined;
        this.seller = new PublicUser(partial.seller);

        if (partial.blook) this.blookId = partial.blook.blookId;
        if (partial.item) {
            this.itemId = partial.item.itemId;
            this.itemUsesLeft = partial.item.usesLeft
        }

        this.blook = undefined;
        this.item = undefined;
    }
}


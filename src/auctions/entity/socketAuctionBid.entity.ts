import { AuctionType, UserItem } from "../../interfaces";

export class SocketAuctionBidEntity {
    id: number;

    auctionId: number;

    amount: number;

    type: AuctionType;

    blookId?: number;
    item?: Partial<UserItem>;

    bidderId: string;
    sellerId: string;

    bidders: string[];

    constructor(partial: Partial<SocketAuctionBidEntity>) {
        Object.assign(this, partial);
    }
}

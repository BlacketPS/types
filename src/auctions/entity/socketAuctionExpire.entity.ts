import { AuctionType, UserItem } from "../../interfaces";

export class SocketAuctionExpireEntity {
    id: number;

    type: AuctionType;

    blookId?: number;
    item?: Partial<UserItem>;

    sellerId: string;
    buyerId?: string;

    price: number;

    buyItNow?: boolean;

    constructor(partial: Partial<SocketAuctionExpireEntity>) {
        Object.assign(this, partial);
    }
}


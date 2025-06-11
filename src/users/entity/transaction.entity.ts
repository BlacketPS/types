import { Exclude } from "class-transformer";
import type { UserBlook, UserItem, UserStatistic, UserDiscord, UserPaymentMethod, UserGroup, Group, PermissionType, UserGuild, UserTitle, UserBanner, UserFont, Upload, IpAddress, Room, UserSubscription, TransactionStatus } from "../../interfaces";
import { UserAvatar, UserSettings } from "./interface";

export class PrivateUser {
    id: number;

    amount: number;

    productId: number
    paymentMethodId: number;

    status: TransactionStatus;

    createdAt: Date;  
    constructor(partial: Partial<PrivateUser>) {
        Object.assign(this, partial);
    }
}

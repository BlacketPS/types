import { Exclude } from "class-transformer";
import { Resource, UserBlook, UserItem, UserStatistic, UserDiscord, UserPermission, UserPaymentMethod } from "../../models";
import { UserBlookObject, UserSettings } from "./interface";

export class PrivateUser {
    id: string;
    username: string;

    @Exclude()
    password: string;

    avatarId: number;
    bannerId: number;

    customAvatar?: string | Resource;
    customBanner?: string | Resource;

    titleId: number;
    fontId: number;

    color: string;

    tokens: number;
    experience: number;

    permissions: number[] | UserPermission[];

    lastClaimed: Date;

    createdAt: Date;
    updatedAt: Date;

    blooks: UserBlookObject = {};
    items: UserItem[] = [];

    settings: UserSettings;

    paymentMethods: UserPaymentMethod[];

    statistics: UserStatistic;

    discord?: UserDiscord;

    @Exclude()
    ipAddress: string;

    constructor(partial: Partial<PrivateUser>) {
        Object.assign(this, partial);

        this.password = undefined;
        this.ipAddress = undefined;

        this.customAvatar = (this.customAvatar as Resource)?.path ?? null;
        this.customBanner = (this.customBanner as Resource)?.path ?? null;

        this.permissions = (this.permissions as unknown as UserPermission[]).map((permission) => permission.permissionId) ?? [];

        if (this.blooks) this.blooks = (this.blooks as unknown as UserBlook[]).flatMap((blook) => blook.blookId).reduce((acc, curr) => {
            const key = String(curr);

            return { ...acc, [key]: acc[key] ? ++acc[key] : 1 };
        }, {});

        if (this.settings) this.settings.otpEnabled = this.settings.otpSecret ? true : false;
        if (this.settings) this.settings.otpSecret = undefined;
    }
}

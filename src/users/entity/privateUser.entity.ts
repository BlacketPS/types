import { Exclude } from "class-transformer";
import { Resource, UserBlook, UserItem, UserStatistic, UserDiscord, UserPaymentMethod, UserGroup, Group } from "../../models";
import { UserBlookObject, UserSettings } from "./interface";

export class PrivateUser {
    id: string;
    username: string;

    @Exclude()
    password: string;

    @Exclude()
    groups: UserGroup[];

    avatarId: number;
    bannerId: number;

    customAvatar?: string | Resource;
    customBanner?: string | Resource;

    titleId: number;
    fontId: number;

    badges: Group[];

    color: string;

    tokens: number;
    experience: number;

    permissions: number[];

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

        this.badges = this.groups.reduce((acc, group) => [...acc, { ...group.group, permissions: undefined, deletedAt: undefined }], []).filter((badge) => badge.imageId !== null);

        this.permissions = [...new Set([...this.permissions, ...this.groups.reduce((acc, group) => [...acc, ...group.group.permissions], [])])];

        if (this.blooks) this.blooks = (this.blooks as unknown as UserBlook[]).flatMap((blook) => blook.blookId).reduce((acc, curr) => {
            const key = String(curr);

            return { ...acc, [key]: acc[key] ? ++acc[key] : 1 };
        }, {});

        if (this.groups) this.groups = undefined;
        if (this.settings) this.settings.otpEnabled = this.settings.otpSecret ? true : false;
        if (this.settings) this.settings.otpSecret = undefined;
    }
}

import { Exclude } from "class-transformer";
import type { Resource, UserBlook, UserItem, UserStatistic, UserDiscord, UserPaymentMethod, UserGroup, Group, PermissionType, UserGuild, UserTitle, UserBanner, UserFont } from "../../interfaces";
import { UserBlookObject, UserSettings } from "./interface";

export class PrivateUser {
    id: string;
    username: string;

    @Exclude()
    password: string = undefined;

    @Exclude()
    groups: UserGroup[];

    @Exclude()
    customAvatarId: number = undefined;

    @Exclude()
    customBannerId: number = undefined;

    @Exclude()
    discordId: string = undefined;

    avatarId: number;
    bannerId: number;

    customAvatar?: string | Resource;
    customBanner?: string | Resource;

    titleId: number;
    fontId: number;

    titles: number[] | UserTitle[] = [];
    fonts: number[] | UserFont[] = [];
    banners: number[] | UserBanner[] = [];
    badges: Group[];

    color: string;

    tokens: number;
    experience: number;

    permissions: PermissionType[];

    lastClaimed: Date;

    lastSeen: Date;

    createdAt: Date;
    updatedAt: Date;

    blooks: UserBlook[] | UserBlookObject = [];
    items: UserItem[] = [];

    settings: UserSettings;

    paymentMethods: UserPaymentMethod[];

    guild: UserGuild[];

    statistics: UserStatistic;

    discord?: UserDiscord;

    @Exclude()
    ipAddress: string = undefined;

    constructor(partial: Partial<PrivateUser>) {
        Object.assign(this, partial);

        this.password = undefined;
        this.ipAddress = undefined;
        this.customAvatarId = undefined;
        this.customBannerId = undefined;
        this.discordId = undefined;

        this.customAvatar = (this.customAvatar as Resource)?.path ?? null;
        this.customBanner = (this.customBanner as Resource)?.path ?? null;

        this.titles = (this.titles as unknown as UserTitle[]).map((title) => title.titleId);
        this.fonts = (this.fonts as unknown as UserFont[]).map((font) => font.fontId);
        this.banners = (this.banners as unknown as UserBanner[]).map((banner) => banner.bannerId);

        if (this.paymentMethods) this.paymentMethods = this.paymentMethods.map((method) => ({ ...method, userId: undefined }));

        if (this.groups) this.badges = this.groups.reduce((acc, group) => [...acc, { ...group.group, permissions: undefined, deletedAt: undefined }], []).filter((badge) => badge.imageId !== null);
        if (this.permissions && this.groups) this.permissions = [...new Set([
            ...this.permissions,
            ...this.groups.reduce((acc, group) => [...acc, ...group.group.permissions], [])
        ])];

        if (this.blooks) this.blooks = (this.blooks as unknown as UserBlook[]).flatMap((blook) => blook.blookId).reduce((acc, curr) => {
            const key = String(curr);

            return { ...acc, [key]: acc[key] ? ++acc[key] : 1 };
        }, {});

        if (this.groups) this.groups = undefined;

        if (this.settings) this.settings.otpEnabled = this.settings.otpSecret ? true : false;
        if (this.settings) this.settings.otpSecret = undefined;
    }
}

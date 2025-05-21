import { Exclude } from "class-transformer";
import type { UserBlook, UserItem, UserStatistic, UserDiscord, UserPaymentMethod, UserGroup, Group, PermissionType, UserGuild, UserTitle, UserBanner, UserFont, Upload, IpAddress, Room } from "../../interfaces";
import { UserAvatar, UserBlookObject, UserSettings } from "./interface";

export class PrivateUser {
    id: string;
    username: string;
    email: string;
    emailVerified: boolean;

    @Exclude()
    password: string = undefined;

    @Exclude()
    groups: UserGroup[];

    @Exclude()
    avatarId: number = undefined;

    @Exclude()
    customAvatarId: number = undefined;

    @Exclude()
    customBannerId: number = undefined;

    @Exclude()
    discordId: string = undefined;

    @Exclude()
    stripeCustomerId: string = undefined;

    @Exclude()
    ipAddressId: number = undefined;

    @Exclude()
    ipAddress: IpAddress = undefined;

    avatar?: UserAvatar | UserBlook;

    bannerId?: number;

    customAvatar?: Upload;
    customBanner?: Upload;

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

    blooks: UserBlook[] = []; // | UserBlookObject = [];
    items: UserItem[] = [];

    settings: UserSettings;

    paymentMethods: UserPaymentMethod[];

    guild: UserGuild[];

    rooms: Room[];

    statistics: UserStatistic;

    discord?: UserDiscord;

    hasPermission: (permission: PermissionType) => boolean;
    setTokens: (tokens: number) => number;

    constructor(partial: Partial<PrivateUser>) {
        Object.assign(this, partial);

        this.password = undefined;
        this.avatarId = undefined;
        this.customAvatarId = undefined;
        this.customBannerId = undefined;
        this.discordId = undefined;
        this.stripeCustomerId = undefined;
        this.ipAddressId = undefined;
        this.ipAddress = undefined;

        if (this.avatar) this.avatar = {
            ...this.avatar,
            blook: undefined,
            resourceId: (this.avatar as UserBlook).blook.imageId
        };

        this.customAvatar = (this.customAvatar as Upload) ?? null;
        this.customBanner = (this.customBanner as Upload) ?? null;

        this.titles = (this.titles as UserTitle[]).map((title) => title.titleId);
        this.fonts = (this.fonts as UserFont[]).map((font) => font.fontId);
        this.banners = (this.banners as UserBanner[]).map((banner) => banner.bannerId);

        if (this.paymentMethods) this.paymentMethods = this.paymentMethods.map((method) => ({ ...method, userId: undefined }));

        // sorts permissions including group permissions
        if (this.groups) this.badges = this.groups
            .reduce((acc, group) => [...acc, { ...group.group, permissions: undefined, deletedAt: undefined }], [])
            .filter((badge) => badge.imageId !== null);
        if (this.permissions && this.groups) this.permissions = [...new Set([
            ...this.permissions,
            ...this.groups.reduce((acc, group) => [...acc, ...group.group.permissions], [])
        ])];

        // // converts UserBlook to UserBlookObject
        // if (this.blooks) this.blooks = (this.blooks as UserBlook[])
        //     .flatMap((blook) => blook.blookId)
        //     .reduce((acc, curr) => {
        //         const key = String(curr);

        //         return { ...acc, [key]: acc[key] ? ++acc[key] : 1 };
        //     }, {});

        if (this.groups) this.groups = undefined;

        if (this.settings) this.settings.otpEnabled = this.settings.otpSecret ? true : false;
        if (this.settings) this.settings.otpSecret = undefined;
    }
}

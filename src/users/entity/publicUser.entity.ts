import { Exclude } from "class-transformer";
import { Resource, Blook, UserSetting } from "src/models";

interface Settings extends UserSetting {
    otpEnabled?: boolean;
}

export class PublicUser {
    id: string;

    username: string;

    avatar: string | Resource;
    banner: string | Resource;

    customAvatar?: string | Resource;
    customBanner?: string | Resource;

    color: string;

    blooks: object | Blook[];

    settings: Settings;

    tokens: number;
    experience: number;

    @Exclude()
    password?: string

    @Exclude()
    ipAddress?: string;

    constructor(partial: Partial<PublicUser>) {
        Object.assign(this, partial);

        this.password = undefined;
        this.ipAddress = undefined;

        this.avatar = (this.avatar as Resource).path;
        this.banner = (this.banner as Resource).path;

        this.customAvatar = (this.customAvatar as Resource)?.path ?? null;
        this.customBanner = (this.customBanner as Resource)?.path ?? null;

        this.blooks = (this.blooks as Blook[]).flatMap((blook: Blook) => blook.id).reduce((acc, curr) => {
            const key = String(curr);

            return { ...acc, [key]: acc[key] ? ++acc[key] : 1 };
        }, {});

        this.settings.otpEnabled = this.settings.otpSecret ? true : false;
        this.settings.otpSecret = undefined;
    }
}

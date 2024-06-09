import { Exclude } from "class-transformer";
import { Resource, UserSetting, Title, Font, UserBlook } from "src/models";

interface Settings extends UserSetting {
    otpEnabled?: boolean;
}

export class PublicUser {
    id: string;

    username: string;

    avatarId: Resource["id"];
    bannerId: Resource["id"];

    customAvatar?: string | Resource;
    customBanner?: string | Resource;

    color: string;

    titleId: Title["id"];
    fontId: Font["id"];

    blooks?: object | UserBlook[];

    settings?: Settings;

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

        this.customAvatar = (this.customAvatar as Resource)?.path ?? null;
        this.customBanner = (this.customBanner as Resource)?.path ?? null;

        if (this.blooks) this.blooks = (this.blooks as UserBlook[]).flatMap((blook) => blook.blookId).reduce((acc, curr) => {
            const key = String(curr);

            return { ...acc, [key]: acc[key] ? ++acc[key] : 1 };
        }, {});

        if (this.settings) this.settings.otpEnabled = this.settings.otpSecret ? true : false;
        if (this.settings) this.settings.otpSecret = undefined;
    }
}

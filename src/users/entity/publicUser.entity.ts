import { Exclude } from "class-transformer";
import { PrivateUser } from "./privateUser.entity";
import { UserSettings } from "./interface";

export class PublicUser extends PrivateUser {
    @Exclude()
    permissions: number[];

    @Exclude()
    settings: UserSettings;

    constructor(partial: Partial<PublicUser>) {
        super(partial);

        this.permissions = undefined;
        this.settings = undefined;
    }
}

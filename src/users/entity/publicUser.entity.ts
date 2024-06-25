import { Exclude } from "class-transformer";
import { PrivateUser } from "./privateUser.entity";
import { UserSettings } from "./interface";

export class PublicUser extends PrivateUser {
    @Exclude()
    settings: UserSettings;

    constructor(partial: Partial<PublicUser>) {
        super(partial);

        this.settings = undefined;
    }
}

import { Exclude } from "class-transformer";
import { PrivateUser } from "./privateUser.entity";
import { UserSettings } from "./interface";
import { PermissionType } from "src/interfaces";

export class PublicUser extends PrivateUser {
    @Exclude()
    permissions: PermissionType[];

    @Exclude()
    settings: UserSettings;

    constructor(partial: Partial<PublicUser>) {
        super(partial);

        this.permissions = undefined;
        this.settings = undefined;
    }
}

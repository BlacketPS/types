import { Exclude } from "class-transformer";
import { PrivateUser } from "./privateUser.entity";
import { UserSettings } from "./interface";
import { PermissionType, UserPaymentMethod } from "../../interfaces";

export class PublicUser extends PrivateUser {
    @Exclude()
    paymentMethods: UserPaymentMethod[] = undefined;

    @Exclude()
    settings: UserSettings = undefined;

    @Exclude()
    permissions: PermissionType[] = undefined;

    constructor(partial: Partial<PublicUser>) {
        super(partial);

        this.paymentMethods = undefined;
        this.settings = undefined;
        this.permissions = undefined;
    }
}

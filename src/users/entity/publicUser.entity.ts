import { Exclude } from "class-transformer";
import { PrivateUser } from "./privateUser.entity";
import { UserSettings } from "./interface";
import { PermissionType, UserPaymentMethod } from "../../interfaces";

export class PublicUser extends PrivateUser {
    @Exclude()
    email: string = undefined;

    @Exclude()
    emailVerified: boolean = undefined;

    @Exclude()
    paymentMethods: UserPaymentMethod[] = undefined;

    @Exclude()
    settings: UserSettings = undefined;

    @Exclude()
    permissions: PermissionType[] = undefined;

    @Exclude()
    lastClaimed: Date = undefined;

    @Exclude()
    lastSeen: Date = undefined;

    constructor(partial: Partial<PublicUser>) {
        super(partial);

        this.email = undefined;
        this.emailVerified = undefined;
        this.paymentMethods = undefined;
        this.settings = undefined;
        this.permissions = undefined;
        this.lastClaimed = undefined;
        this.lastSeen = undefined;
    }
}

import { PublicUser, User } from "../../";

export class GlobalBoost {
    multiplier: number;
    expiresAt: Date;
    user: PublicUser | User;

    constructor(partial: Partial<GlobalBoost>) {
        Object.assign(this, partial);

        this.user = new PublicUser(partial.user);
    }
}

import { Resource } from "src/models";
import { PublicUser } from "src/users";

export class LeaderboardEntity {
    tokens: Array<PublicUser>;
    experience: Array<PublicUser>;

    constructor(partial: Partial<LeaderboardEntity>) {
        Object.assign(this, partial);

        this.tokens.map((user) => {
            user.avatar = (user.avatar as Resource).path;
            user.customAvatar = (user.customAvatar as Resource)?.path ?? null;
        });

        this.experience.map((user) => {
            user.avatar = (user.avatar as Resource).path;
            user.customAvatar = (user.customAvatar as Resource)?.path ?? null;
        });
    }
}

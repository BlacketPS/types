import { User, Resource } from "src/models";

export class LeaderboardEntity {
    tokens: Array<User>;
    experience: Array<User>;

    constructor(partial: Partial<LeaderboardEntity>) {
        Object.assign(this, partial);

        this.tokens.map((user) => {
            user.customAvatar = user.customAvatar ?? null;
        });

        this.experience.map((user) => {
            user.customAvatar = user.customAvatar ?? null;
        });
    }
}

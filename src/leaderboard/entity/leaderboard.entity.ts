import { User } from "src/models";

export class LeaderboardLeaderboardEntity {
    tokens: Array<User>;
    experience: Array<User>;

    constructor(partial: Partial<LeaderboardLeaderboardEntity>) {
        Object.assign(this, partial);

        this.tokens.map((user) => {
            user.customAvatar = user.customAvatar ?? null;
        });

        this.experience.map((user) => {
            user.customAvatar = user.customAvatar ?? null;
        });
    }
}

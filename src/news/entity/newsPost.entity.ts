import { Exclude } from "class-transformer";
import { PublicUser, User } from "../..";

export class NewsNewsPostEntity {
    @Exclude()
    authorId: string;

    id: number;

    title: string;
    content: string;

    imageId: number;

    author: PublicUser | User;

    myVote?: boolean;
    votes: {
        upvotes: number;
        downvotes: number;
    };

    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<NewsNewsPostEntity>) {
        Object.assign(this, partial);

        this.authorId = undefined;
        this.author = new PublicUser(this.author);

        if (!this.myVote) this.myVote = null;
    }
}

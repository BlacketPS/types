import { Exclude } from "class-transformer";
import { FormStatus } from "../../interfaces";

export class FormsFormEntity {
    id: string;

    @Exclude()
    ipAddress: string;

    @Exclude()
    accepterId: string;

    username: string;

    status: FormStatus;

    reasonToPlay: string;

    deniedReason?: string;

    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<FormsFormEntity>) {
        Object.assign(this, partial);

        this.ipAddress = undefined;
        this.accepterId = undefined;
    }
}

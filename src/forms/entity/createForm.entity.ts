import { Exclude } from "class-transformer";

export class FormsCreateFormEntity {
    id: string;

    @Exclude()
    password: string;

    @Exclude()
    ipAddress: string;

    @Exclude()
    accepterId: string;

    constructor(partial: Partial<FormsCreateFormEntity>) {
        Object.assign(this, partial);
    }
}

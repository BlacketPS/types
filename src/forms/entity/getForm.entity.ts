import { Exclude } from "class-transformer";

export class FormsGetFormEntity {
    id: string;

    @Exclude()
    password: string;

    @Exclude()
    ipAddress: string;

    @Exclude()
    accepterId: string;

    constructor(partial: Partial<FormsGetFormEntity>) {
        Object.assign(this, partial);
    }
}

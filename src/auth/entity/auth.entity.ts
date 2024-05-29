import { ApiProperty } from "@nestjs/swagger";

export class AuthEntity {
    @ApiProperty()
    token: string;

    constructor(partial: Partial<AuthEntity>) {
        Object.assign(this, partial);
    }
}


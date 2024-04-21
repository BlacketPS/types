import { ApiProperty } from "@nestjs/swagger";

export class AuthTokenEntity {
    @ApiProperty()
    token: string;

    constructor(partial: Partial<AuthTokenEntity>) {
        Object.assign(this, partial);
    }
}


import { ApiProperty } from "@nestjs/swagger";

export class OtpAuthEntity {
    @ApiProperty()
    otpSecret: string;

    constructor(partial: Partial<OtpAuthEntity>) {
        Object.assign(this, partial);
    }
}

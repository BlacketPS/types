import { IsNotEmpty, IsNumberString, Length, Matches } from "class-validator";

export class DisableOtpDto {
    @IsNotEmpty()
    @IsNumberString()
    @Length(6, 6)
    @Matches(/^\d{6}$/, { message: "otpCode must be a 6-digit number with no spaces" })
    readonly otpCode: string;

    constructor(partial: Partial<DisableOtpDto>) {
        Object.assign(this, partial);

        if (this.otpCode) this.otpCode = this.otpCode.replace(/\s/g, "");
    }
}

export default DisableOtpDto;

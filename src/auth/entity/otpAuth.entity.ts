export class OtpAuthEntity {
    otpSecret: string;

    constructor(partial: Partial<OtpAuthEntity>) {
        Object.assign(this, partial);
    }
}

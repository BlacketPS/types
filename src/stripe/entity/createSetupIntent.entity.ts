export class StripeCreateSetupIntentEntity {
    clientSecret: string;

    constructor(partial: Partial<StripeCreateSetupIntentEntity>) {
        Object.assign(this, partial);
    }
}

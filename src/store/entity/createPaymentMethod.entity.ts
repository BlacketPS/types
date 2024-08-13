import { Exclude } from "class-transformer";

export class StoreCreatePaymentMethodEntity {
    id: number;

    @Exclude()
    userId: string;

    @Exclude()
    squareCustomerId: string;

    @Exclude()
    squarePaymentMethodId: string;

    constructor(partial: Partial<StoreCreatePaymentMethodEntity>) {
        Object.assign(this, partial);
    }
}

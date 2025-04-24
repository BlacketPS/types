import { StripeProductEntity } from "./product.entity";

export class StripeStoreEntity {
    id: number;
    name: string;
    description: string;
    priority: number;
    products: StripeProductEntity[];
    createdAt: Date;
    updatedAt: Date;
    active: boolean;

    constructor(partial: Partial<StripeStoreEntity>) {
        Object.assign(this, partial);

        this.products = partial.products.map((product) => new StripeProductEntity(product));
    }
}

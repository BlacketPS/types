import { IsNotEmpty, Validate } from "class-validator";

export class StripeCreatePaymentMethodDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly paymentMethodId: string;
}

export default StripeCreatePaymentMethodDto;
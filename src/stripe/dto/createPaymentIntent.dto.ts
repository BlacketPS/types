import { IsNumber, IsOptional, Validate } from "class-validator";

export class StripeCreatePaymentIntentDto {
    @IsOptional()
    @IsNumber()
    @Validate((value: number) => value > 0 && value <= 100)
    readonly quantity?: number;
}

export default StripeCreatePaymentIntentDto;

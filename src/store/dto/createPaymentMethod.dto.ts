import { IsNotEmpty, Validate } from "class-validator";

export class StoreCreatePaymentMethodDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly firstName: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly lastName: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly cardNonce: string;
}

export default StoreCreatePaymentMethodDto;
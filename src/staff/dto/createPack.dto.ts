import { IsNotEmpty, Validate } from "class-validator";

export class StaffAdminCreatePackDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly name: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly imageId: number;

    @IsNotEmpty()
    @Validate((value: string) => /^#[0-9A-F]{6}$/i.test(value))
    readonly innerColor: string;

    @IsNotEmpty()
    @Validate((value: string) => /^#[0-9A-F]{6}$/i.test(value))
    readonly outerColor: string;
}

export default StaffAdminCreatePackDto;

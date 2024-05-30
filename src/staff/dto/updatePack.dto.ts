import { IsOptional, Validate } from "class-validator";

export class StaffAdminUpdatePackDto {
    @Validate((value: string) => value.length > 0)
    @IsOptional()
    readonly name?: string;

    @IsOptional()
    readonly price?: number;

    @IsOptional()
    readonly imageId?: number;

    @IsOptional()
    @Validate((value: string) => /^#[0-9A-F]{6}$/i.test(value))
    readonly innerColor?: string;

    @IsOptional()
    @Validate((value: string) => /^#[0-9A-F]{6}$/i.test(value))
    readonly outerColor?: string;
}

export default StaffAdminUpdatePackDto;

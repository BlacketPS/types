import { IsOptional, Length, Matches, Validate } from "class-validator";

export class StaffAdminUpdateRarityDto {
    @Validate((value: string) => value.length > 0)
    @IsOptional()
    readonly name?: string;

    @IsOptional()
    @Length(7)
    @Matches(/^#[0-9a-fA-F]{6}$/)
    @Validate((value: string) => value.length === 7)
    readonly color?: string;

    @IsOptional()
    readonly animationType?: number;

    @IsOptional()
    readonly experience?: number;
}

export default StaffAdminUpdateRarityDto;

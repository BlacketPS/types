import { IsOptional, Validate } from "class-validator";

export class StaffAdminUpdateBlookDto {
    @Validate((value: string) => value.length > 0)
    @IsOptional()
    readonly name?: string;

    @IsOptional()
    readonly chance?: number;

    @IsOptional()
    readonly price?: number;

    @IsOptional()
    readonly rarityId?: number;

    @IsOptional()
    readonly imageId?: number;

    @IsOptional()
    readonly backgroundId?: number;

    @IsOptional()
    readonly packId?: number | null;

    @IsOptional()
    readonly onlyOnDay?: number | null;
}

export default StaffAdminUpdateBlookDto;

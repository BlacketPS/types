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
    readonly packId?: number;

    @IsOptional()
    readonly priority?: number;

    @IsOptional()
    readonly imageId?: number;

    @IsOptional()
    readonly backgroundId?: number;
}

export default StaffAdminUpdateBlookDto;

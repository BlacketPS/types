import { IsNotEmpty, IsNumber } from "class-validator";

export class CosmeticsChangeAvatarDto {
    @IsNotEmpty()
    @IsNumber()
    readonly blookId: number;
}

export default CosmeticsChangeAvatarDto;

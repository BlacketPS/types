import { IsInt, IsNotEmpty, IsNumber, Min } from "class-validator";
import { Blook } from "src/models";

export class SellBlookDto {
    @IsNotEmpty()
    @IsNumber()
    readonly blookId: Blook["id"];

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    readonly quantity: number;
}

export default SellBlookDto;

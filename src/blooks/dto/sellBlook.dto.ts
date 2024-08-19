import { IsInt, IsNotEmpty, IsNumber, Min } from "class-validator";
import type { Blook } from "../../interfaces";

export class BlooksSellBlookDto {
    @IsNotEmpty()
    @IsNumber()
    readonly blookId: Blook["id"];

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    readonly quantity: number;
}

export default BlooksSellBlookDto;

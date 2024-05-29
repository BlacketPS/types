import { IsNotEmpty, IsNumber } from "class-validator";

export class OpenPackDto {
    @IsNotEmpty()
	@IsNumber()
    readonly packId: number;
}

export default OpenPackDto;

import { IsNotEmpty, Validate } from "class-validator";

export class FormsCreateDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly username: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly password: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly reasonToPlay: string;
}

export default FormsCreateDto;

import { IsBoolean, IsNotEmpty, Validate } from "class-validator";

export class FormsCreateDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly username: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly reasonToPlay: string;

    @IsNotEmpty()
    @IsBoolean()
    @Validate((value: boolean) => value === true)
    readonly acceptedTerms: boolean;
}

export default FormsCreateDto;

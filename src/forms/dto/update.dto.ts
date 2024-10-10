import { IsNotEmpty, Validate } from "class-validator";

export class FormsUpdateDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly reasonToPlay: string;
}

export default FormsUpdateDto;

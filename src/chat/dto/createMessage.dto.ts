import { IsNotEmpty, IsOptional, IsNumber, MaxLength, IsString } from "class-validator";

export class CreateMessageDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(2048)
    readonly content: string;

    @IsOptional()
    @IsNumber()
    readonly replyingTo?: number;
}

export default CreateMessageDto;

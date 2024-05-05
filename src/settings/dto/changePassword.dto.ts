import { IsNotEmpty, Validate } from "class-validator";

export class ChangePasswordDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly oldPassword: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly newPassword: string;
}

export default ChangePasswordDto;

import { IsNotEmpty, Validate } from "class-validator";

export class SettingsChangeUsernameDto {
    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly newUsername: string;

    @IsNotEmpty()
    @Validate((value: string) => value.length > 0)
    readonly password: string;
}

export default SettingsChangeUsernameDto;

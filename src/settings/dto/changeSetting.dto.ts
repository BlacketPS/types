import { IsNotEmpty } from "class-validator";

export class SettingsChangeSettingDto {
    @IsNotEmpty()
    readonly key: string;

    @IsNotEmpty()
    readonly value: any;
}

export default SettingsChangeSettingDto;

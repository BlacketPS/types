import { IsNotEmpty } from "class-validator";

export class ChangeSettingDto {
    @IsNotEmpty()
    readonly key: string;

    @IsNotEmpty()
    readonly value: any;
}

export default ChangeSettingDto;

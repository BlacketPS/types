import { UserSetting } from "../../../models";

export interface UserSettings extends UserSetting {
    otpEnabled?: boolean;
}

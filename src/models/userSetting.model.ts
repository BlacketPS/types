import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./index";

import { SettingFriendRequest } from "./enum";

@Table({ tableName: "user_setting", timestamps: false })
export class UserSetting extends Model<UserSetting> {
    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false, primaryKey: true })
    declare id: string;

    @BelongsTo(() => User)
    user: User;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    openPacksInstantly: boolean;

    @Column({
        type: DataType.INTEGER,
        validate: { isIn: { args: [Object.values(SettingFriendRequest)], msg: `friendRequests must be one of these values: ${Object.keys(SettingFriendRequest).join(", ")}` } },
        defaultValue: SettingFriendRequest.ON,
        allowNull: false
    })
    friendRequests: SettingFriendRequest;

    @Column({ type: DataType.JSON, allowNull: false, defaultValue: [] })
    categoriesClosed: string[];

    @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
    otpSecret: string;
}

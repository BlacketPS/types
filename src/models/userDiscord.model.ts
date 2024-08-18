import { Column, Model, Table, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "./index";

@Table({ tableName: "user_discord" })
export class UserDiscord extends Model<UserDiscord> {
    @Column({ type: DataType.STRING, primaryKey: true })
    declare discordId: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @Column({ type: DataType.STRING, allowNull: false })
    username: string;

    @Column({ type: DataType.STRING, allowNull: true })
    avatar?: string;
}

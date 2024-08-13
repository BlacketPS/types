import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Guild, User } from "./index";

@Table({ tableName: "user_guild_request" })
export class UserGuildRequest extends Model<UserGuildRequest> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Guild)
    @Column({ type: DataType.INTEGER, allowNull: false })
    guildId: number;

    @BelongsTo(() => Guild)
    guild: Guild;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;
}

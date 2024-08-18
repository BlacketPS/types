import { Column, Model, Table, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { IpAddress, UserPunishment, User } from "./index";

@Table({ tableName: "blacklist" })
export class Blacklist extends Model<Blacklist> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => UserPunishment)
    @Column({ type: DataType.INTEGER, allowNull: false })
    punishmentId: number;

    @BelongsTo(() => UserPunishment, "punishmentId")
    punishment: UserPunishment;

    @ForeignKey(() => IpAddress)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ipAddressId: IpAddress;

    @BelongsTo(() => IpAddress)
    ipAddress: IpAddress;
}

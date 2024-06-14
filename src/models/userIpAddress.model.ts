import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User, IpAddress } from "./index";

@Table({ tableName: "user_ip_address" })
export class UserIpAddress extends Model<UserIpAddress> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => IpAddress)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ipAddressId: number;

    @BelongsTo(() => IpAddress)
    ipAddress: IpAddress;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    uses: number;
}

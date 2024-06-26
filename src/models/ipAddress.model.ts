import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import { UserIpAddress } from "./index";

@Table({ tableName: "ip_address" })
export class IpAddress extends Model<IpAddress> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    ipAddress: string;

    @HasMany(() => UserIpAddress)
    users?: UserIpAddress[];
}

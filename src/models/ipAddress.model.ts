import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import { Blacklist, UserIpAddress } from "./index";
import { Audit } from "./audit.model";

@Table({ tableName: "ip_address" })
export class IpAddress extends Model<IpAddress> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    ipAddress: string;

    @HasMany(() => UserIpAddress)
    users?: UserIpAddress[];

    @HasMany(() => Audit)
    audits?: Audit[];

    @HasMany(() => Blacklist)
    blacklists?: Blacklist[];
}

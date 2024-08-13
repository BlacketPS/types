import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { AuditActionType, Group, IpAddress, User, UserPunishment } from "./index";

@Table({ tableName: "audit", timestamps: false })
export class Audit extends Model<Audit> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User, "userId")
    user: User;

    @Column({ type: DataType.STRING, allowNull: true })
    secondaryUserId: string;

    @BelongsTo(() => User, "secondaryUserId")
    secondaryUser: User;

    @Column({
        type: DataType.INTEGER,
        validate: { isIn: { args: [Object.values(AuditActionType)], msg: `action must be one of these values: ${Object.keys(AuditActionType).join(", ")}` } },
        allowNull: false
    })
    action: AuditActionType;

    @Column({ type: DataType.STRING, allowNull: true })
    consoleCommand: string;

    @Column({ type: DataType.INTEGER, allowNull: true })
    punishmentId: number;

    @BelongsTo(() => UserPunishment, "punishmentId")
    punishment: UserPunishment;

    @Column({ type: DataType.INTEGER, allowNull: true })
    groupId: number;

    @BelongsTo(() => Group, "groupId")
    group: Group;

    @Column({ type: DataType.INTEGER, allowNull: false })
    ipAddressId: IpAddress;

    @BelongsTo(() => IpAddress, "ipAddress")
    ipAddress: IpAddress;
}

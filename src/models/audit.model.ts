import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { AuditActionType, Form, Group, IpAddress, User, UserPunishment } from "./index";

@Table({ tableName: "audit" })
export class Audit extends Model<Audit> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User, "userId")
    user: User;

    @ForeignKey(() => User)
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

    @Column({ type: DataType.STRING, allowNull: true })
    oldUsername: string;

    @Column({ type: DataType.STRING, allowNull: true })
    newUsername: string;

    @ForeignKey(() => UserPunishment)
    @Column({ type: DataType.INTEGER, allowNull: true })
    punishmentId: number;

    @BelongsTo(() => UserPunishment, "punishmentId")
    punishment: UserPunishment;

    @ForeignKey(() => Group)
    @Column({ type: DataType.INTEGER, allowNull: true })
    groupId: number;

    @BelongsTo(() => Group)
    group: Group;

    @ForeignKey(() => Form)
    @Column({ type: DataType.INTEGER, allowNull: true })
    formId: number;

    @BelongsTo(() => Form)
    form: Form;

    @ForeignKey(() => IpAddress)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ipAddressId: IpAddress;

    @BelongsTo(() => IpAddress)
    ipAddress: IpAddress;
}

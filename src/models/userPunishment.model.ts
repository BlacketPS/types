import { Column, Model, Table, DataType, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Blacklist, User } from "./index";

import { PunishmentType } from "./enum";

@Table({ tableName: "user_punishment" })
export class UserPunishment extends Model<UserPunishment> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User, "userId")
    user: User;

    @Column({
        type: DataType.INTEGER,
        validate: { isIn: { args: [Object.values(PunishmentType)], msg: `type must be one of these values: ${Object.values(PunishmentType).join(", ")}` } },
        allowNull: false
    })
    type: PunishmentType;

    @Column({ type: DataType.STRING, allowNull: false })
    reason: string;

    @Column({ type: DataType.DATE, allowNull: false })
    expiresAt: Date;

    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    staffId: string;

    @BelongsTo(() => User, "staffId")
    staff: User;

    @Column({ type: DataType.DATE, allowNull: false })
    createdAt: Date;

    @HasMany(() => Blacklist)
    blacklists?: Blacklist[];
}

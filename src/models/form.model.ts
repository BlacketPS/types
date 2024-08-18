import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Audit, User } from "./index";
let randomUUID: () => string;
try {
    randomUUID = require("node:crypto").randomUUID;
} catch (e) { }

import { FormStatus } from "./enum";

@Table({ tableName: "form" })
export class Form extends Model<Form> {
    @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => randomUUID() })
    declare id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    username: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.STRING, allowNull: false })
    ipAddress: string;

    @Column({ type: DataType.STRING, allowNull: false })
    reasonToPlay: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: FormStatus.PENDING })
    status: FormStatus;

    @Column({ type: DataType.STRING, allowNull: true })
    deniedReason: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: true })
    accepterId: string;

    @BelongsTo(() => User, "accepterId")
    accepter: User;

    @HasMany(() => Audit)
    audits?: [];
}

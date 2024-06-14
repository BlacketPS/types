import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User, Blook } from "./index";

import { BlookObtainMethod } from "./enum";

@Table({ tableName: "user_blook" })
export class UserBlook extends Model<UserBlook> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User, "userId")
    user: User;

    @ForeignKey(() => Blook)
    @Column({ type: DataType.INTEGER, allowNull: false })
    blookId: number;

    @BelongsTo(() => Blook)
    blook: Blook;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    sold: boolean;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    initalObtainerId: string;

    @BelongsTo(() => User, "initalObtainerId")
    initialObtainer: User;

    @Column({
        type: DataType.INTEGER,
        validate: { isIn: { args: [Object.values(BlookObtainMethod)], msg: `obtainedBy must be one of these values: ${Object.keys(BlookObtainMethod).join(", ")}` } },
        defaultValue: BlookObtainMethod.UNKNOWN,
        allowNull: false
    })
    obtainedBy: BlookObtainMethod;
}

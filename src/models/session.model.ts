import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./index";
let randomUUID: () => string;
try {
    randomUUID = require("node:crypto").randomUUID;
} catch (e) { }

@Table({ tableName: "sessions", timestamps: false })
export class Session extends Model<Session> {
    @Column({ type: DataType.STRING, primaryKey: true, defaultValue: () => randomUUID() })
    declare id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    createdAt: Date;
}

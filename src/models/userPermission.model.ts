import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User, Permission } from "./index";

@Table({ tableName: "user_permission" })
export class UserPermission extends Model<UserPermission> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User, "userId")
    user: User;

    @ForeignKey(() => Permission)
    @Column({ type: DataType.INTEGER, allowNull: false })
    permissionId: number;

    @BelongsTo(() => Permission, "permissionId")
    permission: Permission;
}
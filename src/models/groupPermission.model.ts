import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Group, Permission } from "./index";

@Table({ tableName: "group_permission" })
export class GroupPermission extends Model<GroupPermission> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => Group)
    @Column({ type: DataType.INTEGER, allowNull: false })
    groupId: number;
    
    @BelongsTo(() => Group, "groupId")
    group: Group;

    @ForeignKey(() => Permission)
    @Column({ type: DataType.INTEGER, allowNull: false })
    permissionId: number;

    @BelongsTo(() => Permission, "permissionId")
    permission: Permission;
}
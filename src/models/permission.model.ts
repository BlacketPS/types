import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import { UserPermission } from "./index";

@Table({ tableName: "permission" })
export class Permission extends Model<Permission> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @HasMany(() => UserPermission)
    userPermissions: UserPermission[];
}

import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Resource, GroupPermission, UserGroup } from "./index";

@Table({ tableName: "group", timestamps: false })
export class Group extends Model<Group> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

    @HasMany(() => GroupPermission)
    permissions: GroupPermission[];

    @HasMany(() => UserGroup)
    userGroups: UserGroup[];

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;
}

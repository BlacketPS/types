import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Resource, GroupPermission, UserGroup } from "./index";
import { Audit } from "./audit.model";

@Table({ tableName: "group", timestamps: false, paranoid: true })
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

    @HasMany(() => Audit)
    audits: Audit[];

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;
}

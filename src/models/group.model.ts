import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Resource, UserGroup, Audit } from "./index";

@Table({ tableName: "group", paranoid: true })
export class Group extends Model<Group> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    description?: string;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

    @Column({ type: DataType.JSON, allowNull: false, defaultValue: [] })
    permissions: number[];

    @HasMany(() => UserGroup)
    userGroups: UserGroup[];

    @HasMany(() => Audit)
    audits: Audit[];

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;
}

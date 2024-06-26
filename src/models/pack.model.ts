import { Column, Model, Table, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Blook, Resource } from "./index";

@Table({ tableName: "pack" })
export class Pack extends Model<Pack> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    price: number;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
    enabled: boolean;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER, allowNull: false })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: { is: /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$|^rainbow$/ }
    })
    innerColor: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: { is: /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$|^rainbow$/ }
    })
    outerColor: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;

    @HasMany(() => Blook)
    blooks?: Blook[];
}

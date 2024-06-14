import { Column, Model, Table, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Resource } from "./index";

@Table({ tableName: "font" })
export class Font extends Model<Font> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER, allowNull: false })
    resourceId: number;

    @BelongsTo(() => Resource, "resourceId")
    resource: Resource;
}

import { Column, Model, Table, DataType, BelongsTo } from "sequelize-typescript";
import { Blook, Font, Group, Item, Resource, Title } from ".";

@Table({ tableName: "product" })
export class Product extends Model<Product> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    description: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

    @Column({ type: DataType.INTEGER, allowNull: false })
    type: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    itemId: number;

    @BelongsTo(() => Item, "itemId")
    item: Item;

    @Column({ type: DataType.INTEGER, allowNull: true })
    blookId: number;

    @BelongsTo(() => Blook, "blookId")
    blook: Blook;

    @Column({ type: DataType.INTEGER, allowNull: true })
    titleId: number;

    @BelongsTo(() => Title, "titleId")
    title: Title;

    @Column({ type: DataType.INTEGER, allowNull: true })
    fontId: number;

    @BelongsTo(() => Font, "fontId")
    font: Font;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    isSubscription: boolean;

    @Column({ type: DataType.FLOAT, allowNull: true })
    monthlyPrice: number;

    @Column({ type: DataType.FLOAT, allowNull: true })
    lifetimePrice: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
    groupId: number;

    @BelongsTo(() => Group, "groupId")
    group: Group;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;
}

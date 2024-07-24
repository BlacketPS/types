import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Blook, Item, Title, ItemShopItemType } from "./index";

@Table({ tableName: "item_shop" })
export class ItemShop extends Model<ItemShop> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({
        type: DataType.INTEGER,
        validate: { isIn: { args: [Object.values(ItemShopItemType)], msg: `type must be one of these values: ${Object.keys(ItemShopItemType).join(", ")}` } },
        allowNull: false
    })
    type: ItemShopItemType;

    @ForeignKey(() => Item)
    @Column({ type: DataType.INTEGER, allowNull: true })
    itemId: number;

    @BelongsTo(() => Item)
    item: Item;

    @ForeignKey(() => Blook)
    @Column({ type: DataType.INTEGER, allowNull: true })
    blookId: number;

    @BelongsTo(() => Blook)
    blook: Blook;

    @ForeignKey(() => Title)
    @Column({ type: DataType.INTEGER, allowNull: true })
    titleId: number;

    @BelongsTo(() => Title)
    title: Title;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    price: number;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
    enabled: boolean;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    weekly: boolean;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;
}

import { Column, Model, Table, DataType, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Rarity, Resource, Auction, UserItem } from "./index";

import { ItemType } from "./enum";

@Table({ tableName: "item" })
export class Item extends Model<Item> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @ForeignKey(() => Rarity)
    @Column({ type: DataType.INTEGER, allowNull: false })
    rarityId: number;

    @BelongsTo(() => Rarity, "rarityId")
    rarity: Rarity;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER, allowNull: false })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: { isIn: { args: [Object.values(ItemType)], msg: `itemType must be one of: ${Object.values(ItemType).join(", ")}` } },
        defaultValue: ItemType.NONE
    })
    type: ItemType;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canUse: boolean;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canAuction: boolean;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canTrade: boolean;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    maxUses: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
    boosterDuration?: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;

    @HasMany(() => UserItem)
    userItems?: UserItem[];

    @HasMany(() => Auction)
    auctions?: Auction[];
}

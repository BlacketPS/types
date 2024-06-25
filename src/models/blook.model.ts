import { Column, Model, Table, DataType, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Rarity, Resource, Pack, Auction, UserBlook } from "./index";

import { DayType } from "./enum";

@Table({ tableName: "blook" })
export class Blook extends Model<Blook> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.DOUBLE, allowNull: false, defaultValue: 0 })
    chance: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    price: number;

    @ForeignKey(() => Rarity)
    @Column({ type: DataType.INTEGER, allowNull: false })
    rarityId: number;

    @BelongsTo(() => Rarity)
    rarity: Rarity;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER, allowNull: false })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER, allowNull: false })
    backgroundId: number;

    @BelongsTo(() => Resource, "backgroundId")
    background: Resource;

    @ForeignKey(() => Pack)
    @Column({ type: DataType.INTEGER, allowNull: true })
    packId: number;

    @BelongsTo(() => Pack)
    pack?: Pack;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        validate: { isIn: { args: [Object.values(DayType)], msg: `onlyOnDay must be one of: ${Object.values(DayType).join(", ")}` } },
        defaultValue: null
    })
    onlyOnDay?: DayType;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    priority: number;

    @HasMany(() => UserBlook)
    userBlooks?: UserBlook[];

    @HasMany(() => Auction)
    auctions?: Auction[];
}

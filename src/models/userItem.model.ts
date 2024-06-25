import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User, Item } from "./index";

import { ItemObtainMethod } from "./enum";

@Table({ tableName: "user_item" })
export class UserItem extends Model<UserItem> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User, "userId")
    user: User;

    @ForeignKey(() => Item)
    @Column({ type: DataType.INTEGER, allowNull: false })
    itemId: number;

    @BelongsTo(() => Item)
    item: Item;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    usesLeft: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    initalObtainerId: string;

    @BelongsTo(() => User, "initalObtainerId")
    initialObtainer: User;

    @Column({
        type: DataType.INTEGER,
        validate: { isIn: { args: [Object.values(ItemObtainMethod)], msg: `obtainedBy must be one of these values: ${Object.keys(ItemObtainMethod).join(", ")}` } },
        defaultValue: ItemObtainMethod.UNKNOWN,
        allowNull: false
    })
    obtainedBy: ItemObtainMethod;
}

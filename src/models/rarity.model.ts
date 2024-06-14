import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import { Blook } from "./index";

import { RarityAnimationType } from "./enum";

@Table({ tableName: "rarity" })
export class Rarity extends Model<Rarity> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            is: /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$|^rainbow$/
        }
    })
    color: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: { isIn: { args: [Object.values(RarityAnimationType)], msg: `animationType must be one of these values: ${Object.keys(RarityAnimationType).join(", ")}` } }
    })
    animationType: RarityAnimationType;

    @Column({ type: DataType.INTEGER, allowNull: false })
    experience: number;

    @HasMany(() => Blook)
    blooks: Blook[];
}

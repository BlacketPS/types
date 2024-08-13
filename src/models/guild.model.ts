import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Resource, UserGuild, UserGuildRequest } from "./index";

// TODO: Implement guild chat room
@Table({ tableName: "guild", timestamps: true })
export class Guild extends Model<Guild> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

	@Column({
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: "#ffffff",
        validate: {
            is: /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$|^rainbow$/
        }
    })
    color: string;

	@Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    experience: number;

    @ForeignKey(() => Resource)
    @Column({ type: DataType.INTEGER })
    imageId: number;

    @BelongsTo(() => Resource, "imageId")
    image: Resource;

	@HasMany(() => UserGuild)
    members: UserGuild[];

	@HasMany(() => UserGuildRequest)
	requests: UserGuildRequest[];

	@Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
	acceptingRequests: boolean;
}

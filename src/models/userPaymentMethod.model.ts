import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./index";

@Table({ tableName: "user_payment_method" })
export class UserPaymentMethod extends Model<UserPaymentMethod> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @Column({ type: DataType.STRING, allowNull: false })
    squareCustomerId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    squarePaymentMethodId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    cardBrand: string;

    @Column({ type: DataType.STRING, allowNull: false })
    lastFour: string;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    primary: boolean;
}

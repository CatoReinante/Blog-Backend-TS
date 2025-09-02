import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  toJSON() {
    const values = { ...this.get() } as any;
    delete values.password;
    return values;
  }
}

export function initUser(sequelize: Sequelize) {
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      username: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: "User", tableName: "users" }
  );
}

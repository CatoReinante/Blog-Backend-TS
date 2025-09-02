import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  static initModel(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }
}

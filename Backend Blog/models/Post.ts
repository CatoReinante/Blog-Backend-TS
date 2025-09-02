import { DataTypes, Model, Sequelize } from "sequelize";

export class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;

  static initModel(sequelize: Sequelize) {
    Post.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Post",
      }
    );
  }
}

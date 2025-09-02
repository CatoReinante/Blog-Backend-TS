import { DataTypes, Model, Sequelize } from "sequelize";

export class Post extends Model {
  public id!: number;
  public content!: string;
  public userId!: number;
}

export function initPost(sequelize: Sequelize) {
  Post.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      content: { type: DataTypes.TEXT, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    { sequelize, modelName: "Post", tableName: "posts" }
  );
}

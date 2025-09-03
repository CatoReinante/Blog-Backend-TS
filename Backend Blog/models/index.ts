import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { User, initUser } from "./User";
import { Post, initPost } from "./Post";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "",
  process.env.DB_USERNAME || "",
  process.env.DB_PASSWORD || "",
  { host: process.env.DB_HOST, dialect: "mysql", logging: false }
);

initUser(sequelize);
initPost(sequelize);

User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "author" });

export { sequelize, User, Post };

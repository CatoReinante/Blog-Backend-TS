import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { User, initUser } from "./User";
import { Post, initPost } from "./Post";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASS || "",
  { host: process.env.DB_HOST, dialect: "mysql", logging: false }
);

initUser(sequelize);
initPost(sequelize);

User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "author" });

export { sequelize, User, Post };

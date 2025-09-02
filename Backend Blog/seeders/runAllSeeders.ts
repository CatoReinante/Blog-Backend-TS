import { Sequelize } from "sequelize";
import { UserSeeder } from "./userSeeder";
import { PostSeeder } from "./PostSeeder";

const runAllSeeders = async () => {
  await UserSeeder();
  await PostSeeder();
};

runAllSeeders();

import { sequelize } from "../models";
import { PostSeeder } from "./postSeeder";
import { UserSeeder } from "./userSeeder";

const runAllSeeders = async () => {
  try {
    await sequelize.sync(); // <-- Esto crea las tablas si no existen
    await UserSeeder();
    await PostSeeder();
    console.log("🌱 Seeders ejecutados con éxito");
    process.exit();
  } catch (error) {
    console.error("❌ Error al ejecutar seeders:", error);
    process.exit(1);
  }
};

runAllSeeders();

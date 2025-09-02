import { UserSeeder } from "./userSeeder.js";
import { PostSeeder } from "./postSeeder.js";

const runAllSeeders = async () => {
  try {
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

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models";
import api from "./routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", api);

const PORT = process.env.PORT || 3000;

(async () => {
  await sequelize.authenticate();
  await sequelize.sync(); // <-- Esto crea las tablas
  console.log("DB conectada y tablas sincronizadas");
  app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
})();

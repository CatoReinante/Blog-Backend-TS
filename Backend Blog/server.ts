import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models";
import api from "./routes";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api", api);

app.get("/health", (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;

(async () => {
  await sequelize.authenticate();
  console.log("DB conectada");
  app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
})();

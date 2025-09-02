import express, { Application } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { sequelize } from "./models/index";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});

import postRoutes from "./PostRoutes";
import userRoutes from "./userRoutes";
import { Router } from "express";

const router = Router();

router.use("/posts", postRoutes);
router.use("/users", userRoutes);

export default router;

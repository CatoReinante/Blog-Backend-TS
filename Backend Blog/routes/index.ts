import postRoutes from "./PostRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import { Router } from "express";

const router = Router();

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;

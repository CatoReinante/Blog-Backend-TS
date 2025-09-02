import exampleRoutes from "./exampleRoutes";
import postRoutes from "./PostRoutes";
import userRoutes from "./userRoutes";
import { Router } from "express";

const router = Router();

router.use(exampleRoutes);
router.use(postRoutes);
router.use(userRoutes);

export default router;

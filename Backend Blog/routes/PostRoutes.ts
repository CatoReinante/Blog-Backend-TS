import { Router } from "express";
import { postController } from "../controllers/postController";

const router = Router();

router.get("/posts", postController.getAllPosts);
router.post("/posts", postController.createPost);

export default router;

import { Request, Response } from "express";
import { Post } from "../models/Post";
import { User } from "../models/User";

export const postController = {
  getAllPosts: async (_req: Request, res: Response) => {
    try {
      const posts = await Post.findAll({
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: User,
            as: "author",
            attributes: ["id", "username", "email"],
          },
        ],
      });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener posts" });
    }
  },
  createPost: async (req: Request, res: Response) => {
    try {
      const { content, userId } = req.body;
      if (!content || !userId) {
        return res.status(400).json({ error: "Faltan datos" });
      }
      const post = await Post.create({
        content,
        userId,
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Error al crear post" });
    }
  },
};

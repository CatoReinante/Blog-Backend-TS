import { Request, Response } from "express";
import { Post } from "../models/Post";

export const postController = {
  getAllPosts: async (req: Request, res: Response) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener posts" });
    }
  },
  createPost: async (req: Request, res: Response) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Error al crear post" });
    }
  },
};

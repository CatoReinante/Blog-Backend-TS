import { Request, Response } from "express";
import { User } from "../models/User";

export const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error al crear usuario" });
    }
  },
};

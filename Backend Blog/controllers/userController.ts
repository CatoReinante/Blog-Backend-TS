import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";

export const userController = {
  getAllUsers: async (_req: Request, res: Response) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({ error: "Faltan datos" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error al crear usuario" });
    }
  },
};

import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import { User } from "../models";
import Jwt from "jsonwebtoken";
import { Request, Response } from "express";

const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";
const jwtExpiry = process.env.JWT_EXPIRY || 3600;

const signToken = (payload: {
  id: number;
  username: string;
  email: string;
}) => {
  return Jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiry as any });
};

export const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const exists = await User.findOne({ where: { email } });
      if (exists) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json(user);
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await User.findOne({
        where: { [Op.or]: [{ username }, { email: username }] }, // permite username o email
      });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = signToken({
        id: user.id,
        username: user.username,
        email: user.email,
      });
      res.status(200).json({
        token,
        user: { id: user.id, username: user.username, email: user.email },
      });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  logout: async (req: Request, res: Response) => {
    // Logout logic
  },
};

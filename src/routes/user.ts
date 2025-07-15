import AuthController from "@/app/controllers/authController";
import UserController from "@/app/controllers/userController";
import { Router } from "express";

const userRoutes = Router();

const userController = new UserController();

userRoutes.get("/", userController.getAll);

export default userRoutes;

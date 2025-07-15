import AuthController from "@/app/controllers/authController";
import { validate } from "@/app/middleware/validate";
import { loginSchema, registerSchema } from "@/app/schema/auth.schema";
import { Router } from "express";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/login", validate(loginSchema), authController.login);
authRoutes.post("/register", validate(registerSchema), authController.register);

export default authRoutes;

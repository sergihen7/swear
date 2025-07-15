import express from "express";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";

const app = express.Router();

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

export default app;

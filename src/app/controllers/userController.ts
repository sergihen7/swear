import prisma from "@/config/db";
import { RequestHandler } from "express";

class UserController {
  getAll: RequestHandler = async (req, res) => {
    const users = await prisma.user.findMany({
      omit: {
        password: true,
      },
      include: {
        posts: true,
      },
    });

    res.json(users);
  };
}

export default UserController;

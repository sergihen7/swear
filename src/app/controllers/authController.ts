import prisma from "@/config/db";
import UnauthorizedSwear from "@/errors/UnauthorizedSwear";
import { formatJson } from "@/helper/response";
import { RequestHandler } from "express";

class AuthController {
  login: RequestHandler = async (req, res) => {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.username,
      },
    });

    if (user?.password === req.body.password) {
      res.status(200).json(
        formatJson({
          message: "Login Success",
          body: {
            token: 123,
          },
        })
      );
      return;
    }

    throw new UnauthorizedSwear({
      message: "Username or Password wrong",
      errors: { username: "Username or Password wrong" },
    });
  };

  register: RequestHandler = async (req, res) => {
    console.log(req.body);
  };
}

export default AuthController;

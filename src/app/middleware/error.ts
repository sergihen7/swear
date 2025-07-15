import Swear from "@/errors/Swear";
import { formatJson } from "@/helper/response";
import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Swear) {
    res.status(err.statusCode).json(
      formatJson({
        success: false,
        message: err.message,
        body: err.errors,
      })
    );
  }
};

export default errorHandler;

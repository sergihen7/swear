import BadRequestSwear from "@/errors/BadRequestSwear";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema, ValidationError } from "yup";

export const validate =
  (schema: ObjectSchema<any>): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    schema
      .validate(req.body, { abortEarly: false })
      .then(() => {
        next();
      })
      .catch((e: ValidationError) => {
        const errors: { [key: string]: any } = {};
        e.inner.forEach((error) => {
          errors[error.path!] = error.message;
        });
        next(new BadRequestSwear({ errors }));
      });
  };

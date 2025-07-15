import { number, object, string } from "yup";

export const loginSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

export const registerSchema = object().shape({
  email: string().email().required(),
  name: string().required(),
  roleId: number().default(() => {
    return 1;
  }),
  password: string().required(),
});

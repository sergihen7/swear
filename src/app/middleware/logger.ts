import { RequestHandler } from "express";

const logger: RequestHandler = (req, _, next) => {
  const date = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(`[${req.method}]`, req.path, "~", formatter.format(date));
  next();
};

export default logger;

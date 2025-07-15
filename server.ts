import "module-alias/register";
import express from "express";
import bodyParser from "body-parser";
import logger from "@/app/middleware/logger";
import app from "@/app";
import errorHandler from "@/app/middleware/error";

const server = express();
const PORT = Number(process.env.PORT) || 8000;

server.use(bodyParser.json());

// Logging
server.use(logger);

// Initialize App
server.use(app);

// Error Handling
server.use(errorHandler);

// Start Server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

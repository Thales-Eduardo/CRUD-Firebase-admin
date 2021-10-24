import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "dotenv/config";
import cors from "cors";
import "express-async-errors";

import { AppErrors } from "./shared/error/AppErrors";

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(router);

app.post("/users", (req: Request, res: Response) => {
  const { title } = req.body;
  res.json({ mensagem: "olá", body: title });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => {
  console.log(`http://localhost:${port} 🔥🔥🚒`);
});

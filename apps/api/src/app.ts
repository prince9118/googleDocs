import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Health Api working"
  });
});

export default app;

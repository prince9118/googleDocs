import express from "express";
import cors from "cors";
import helmet from "helmet";
import { prisma } from "@google-docs/db";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

app.get("/health", async (_req, res) => {
  res.json({
    success: true,
    message: "Google Docs API is healthy"
  });
});

app.get("/health/db", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      success: true,
      database: "connected"
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(500).json({
      success: false,
      database: "disconnected"
    });
  }
});

export default app;

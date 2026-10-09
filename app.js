import express from "express";
import cors from "cors";
import db from "./db/db.js";
const app = express();

// essential middleware
app.use(cors());
app.use(express.json());

export default app;

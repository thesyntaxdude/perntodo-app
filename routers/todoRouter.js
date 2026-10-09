import express from "express";
import { createTodo } from "../controllers/todoController.js";

const router = express.Router();

router.route("/").post(createTodo);

export default router;

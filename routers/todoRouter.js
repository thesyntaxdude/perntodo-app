import express from "express";
import {
  createTodo,
  listAllTodos,
  listTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.route("/").post(createTodo).get(listAllTodos);
router.route("/:id").get(listTodo);

export default router;

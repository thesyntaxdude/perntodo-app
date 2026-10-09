import express from "express";
import {
  createTodo,
  deleteTodo,
  listAllTodos,
  listTodo,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.route("/").post(createTodo).get(listAllTodos);
router.route("/:id").get(listTodo).put(updateTodo).delete(deleteTodo);

export default router;

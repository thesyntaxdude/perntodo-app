import { create } from "../services/todoService.js";

export const createTodo = async (req, res, next) => {
  const { description } = req.body;
  const newTodo = await create(description);
  res.json(newTodo.rows[0]);
};

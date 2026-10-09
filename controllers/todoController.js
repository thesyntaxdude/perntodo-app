import { create, listAll, listOne } from "../services/todoService.js";

export const createTodo = async (req, res, next) => {
  const { description } = req.body;
  const newTodo = await create(description);
  res.json(newTodo.rows[0]);
};

export const listAllTodos = async (req, res, next) => {
  const allTodos = await listAll();
  res.json(allTodos.rows);
};

export const listTodo = async (req, res, next) => {
  const { id } = req.params;
  const todo = await listOne(Number(id));
  res.json(todo.rows[0]);
};

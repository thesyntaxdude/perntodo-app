import {
  create,
  listAll,
  listOne,
  update,
  remove,
} from "../services/todoService.js";

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
  res.json(todo);
};

export const updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const { description } = req.body;
  const oldTodo = await listOne(Number(id));
  if (oldTodo.message) {
    return res.status(404).json(oldTodo.message);
  }
  const updatedTodo = {
    todo_id: id,
    description: description || oldTodo.description,
  };
  await update(updatedTodo);
  res.json({ message: `todo with ${id} updated successfully` });
};

export const deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  const removedTodo = await remove(id);
  res.json({ message: `todo with ${id} deleted successfully` });
};

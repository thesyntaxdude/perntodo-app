import db from "../db/db.js";

export const create = async (description) => {
  return await db.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description],
  );
};

export const listAll = async () => {
  return await db.query("SELECT * FROM todo");
};

export const listOne = async (id) => {
  const todo = await db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  if (todo.rows == 0) {
    return { message: `Can't find todo with id ${id}` };
  }
  return todo.rows[0];
};

export const update = async (updatedTodo) => {
  return await db.query("UPDATE todo SET description = $2 WHERE todo_id = $1", [
    updatedTodo.todo_id,
    updatedTodo.description,
  ]);
};

export const remove = async (id) => {
  const todo = await listOne(id);
  if (todo.message) {
    return todo.message;
  }
  return await db.query("DELETE FROM todo WHERE todo_id = $1", [id]);
};

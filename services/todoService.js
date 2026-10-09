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
  return await db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
};

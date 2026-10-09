import db from "../db/db.js";

export const create = async (description) => {
  return await db.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description],
  );
};

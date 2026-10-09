import { Pool } from "pg";
import config from "../config.js";

const pool = new Pool({
  user: config.db_user,
  password: config.db_password,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
});

export default pool;

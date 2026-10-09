const config = {
  mode: process.env.NODE_ENV || "development",
  server_port: Number(process.env.SERVER_PORT) || 3000,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: Number(process.env.DB_PORT),
  db: process.env.DB,
};

if (
  !config.db_user ||
  !config.db_password ||
  !config.db_host ||
  !config.db_port ||
  !config.db
) {
  console.log(`All DB Credentials are required`);
  process.exit(1);
}

export default config;

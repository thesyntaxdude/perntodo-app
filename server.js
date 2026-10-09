import app from "./app.js";
import config from "./config.js";

app.listen(config.server_port, () =>
  console.log(
    `server listening in ${config.mode} on port ${config.server_port}`,
  ),
);

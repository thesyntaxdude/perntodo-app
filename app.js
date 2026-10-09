import express from "express";
import cors from "cors";
import todoRouter from "./routers/todoRouter.js";
import AppError from "./utils/AppError.js";
import ErrorCentral from "./middleware/ErrorCentral.js";

const app = express();
// essential middleware
app.use(cors());
app.use(express.json());

//route
app.use("/todo", todoRouter);
app.use((req, res, next) => {
  next(new AppError("404 Route Not Found", 404));
});
app.use(ErrorCentral);
export default app;

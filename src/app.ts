import express from "express";
import employeeRouter from "./api/router/routes";

const app = express();

app.use(express.json());

app.use("/api/v1", employeeRouter);

export default app;
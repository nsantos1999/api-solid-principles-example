import { Router } from "express";
import { createUserController } from "useCases/CreateUser";

const app = Router();

app.post("/", (req, res) => createUserController.handle(req, res));

export default app;

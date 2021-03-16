import { Router } from "express";

import userRoutes from "@routes/user.routes";

const app = Router();

app.use("/users", userRoutes);

export default app;

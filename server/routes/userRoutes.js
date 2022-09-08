import express from "express";

import { loginUser, registerUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/users/login", loginUser);
userRoutes.post("/users", registerUser);

export default userRoutes;

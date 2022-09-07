import express from "express";

import { loginUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/users/login", loginUser);
userRoutes.post("/users", (req, res) => res.json("registration"));

export default userRoutes;

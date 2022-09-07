import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv/config";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Badminton League App API!" });
});

app.use("/api", userRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import router from "./routes/user.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running...");
});
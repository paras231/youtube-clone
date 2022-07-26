import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 8000 || process.env.PORT;
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    throw err;
  });

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authroutes);
app.use("/api/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

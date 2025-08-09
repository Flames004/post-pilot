import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import ideaRoutes from "./routes/ideas.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://post-pilot-sable.vercel.app'] // Replace with your actual Vercel URL
    : true, // Allow all origins in development
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/ideas", ideaRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo connected");
    app.listen(PORT, () => console.log("Server running on", PORT));
  })
  .catch(err => console.error("Mongo error:", err));

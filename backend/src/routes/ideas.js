import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { createIdea, getIdeas } from "../controllers/ideaController.js";
const router = express.Router();
router.post("/", verifyToken, createIdea);
router.get("/", verifyToken, getIdeas);

export default router;

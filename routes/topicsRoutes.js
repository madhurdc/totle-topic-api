import { Router } from "express";
import { getTopics } from "../controllers/topicsController.js";

const router = Router();

// GET /api/topics
router.get("/topics", getTopics);

export default router;

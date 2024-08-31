import express from "express";
const router = express.Router();
import { allPosts, addPost } from "../controllers/post.controller.js";

router.get("/", allPosts);
router.post("/add", addPost);

export default router;
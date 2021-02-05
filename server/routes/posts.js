import express from "express";
import * as postsController from "../controllers/posts.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", postsController.getPosts);
router.post("/", auth, postsController.createPost);
router.patch("/:id", auth, postsController.updatePost);
router.delete("/:id", auth, postsController.deletePost);
router.patch("/:id/like", auth, postsController.likePost);

export default router;

import express from "express";
import * as usersControllers from "../controllers/user.js";

const router = express.Router();

router.post("/signin", usersControllers.signin);
router.post("/signup", usersControllers.signup);

export default router;

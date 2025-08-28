import express from "express";
import { google, signOut, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/google", google);
router.get("/signout", signOut);
router.post("/register", signup);
router.post("/signin", signin);

export default router;

import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Google auth
router.post('/google', google);

// Sign out
router.get('/signout', signOut);

// Signup & Signin
router.post("/register", signup);  // use imported signup
router.post("/signin", signin);    // use imported signin

export default router;

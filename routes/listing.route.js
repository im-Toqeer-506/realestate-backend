import express from 'express';
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings, 
} from '../controllers/listing.controller.js';
import {verifyToken} from "../utils/verifyUser.js"
const router = express.Router();

// Routes
router.post('/create', verifyToken, createListing);
router.get('/get', verifyToken, getListings);
router.get('/get/:id', verifyToken, getListing);
router.put('/update/:id', verifyToken, updateListing);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;

import express from 'express';
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings, // <- make sure this matches your controller
} from '../controllers/listing.controller.js';

const router = express.Router();

// Routes
router.post('/', createListing);
router.get('/', getListings); 
router.get('/:id', getListing);
router.put('/:id', updateListing);
router.delete('/:id', deleteListing);

export default router;

import express from 'express';
import { createTracker, getTrackerHits } from '../controllers/trackerController.js';
const router = express.Router();

router.post('/', createTracker);
router.get('/:id/hits', getTrackerHits);

export default router;


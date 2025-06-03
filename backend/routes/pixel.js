
// 4. Routes - pixel.js
import express from 'express';
import { servePixel } from '../controllers/pixelController.js';
const router = express.Router();

router.get('/t/:slug.png', servePixel);

export default router;